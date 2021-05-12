// Hello hiring manager? :) nice to meet you. I didn't use persistent storage on this to simplify cloning it down and running it
const express = require('express')
const app = express()
const port = 8080

let zips = {}

const conform = (string) => {
  //sanitizes the input ensuring only 5 digit integers can be processed
  if (string.length !== 5) return false
  let arr = string.split('')
  for (i = 0; i < arr.length; i++) {
    let digit = Number(arr[i])
    arr[i] = digit
    if (typeof arr[i] !== 'number') return false
  }
  arr = arr.join('')
  return arr
}

app.get('/:method/:zip?',(req, res) => {
  let method = req.params.method
  let zip;
  if (req.params.zip) {
    zip = conform(req.params.zip)
  }
  if (method === 'has'){
    if (!zip) {
      res.status(400).send()
      return
    }
    if (zips[zip]) {
      res.status(200).send(true)
      return
    }
    res.status(200).send(false)
  }
  if (method === 'display') {
    let zipsArr = Object.keys(zips)
    if (!zipsArr.length) {
      res.send()
      return
    }
    zipsArr.sort()
    let result = ''
    let rangeStart = zipsArr[0]
    let rangeEnd = zipsArr[0]

    for (let i = 1; i < zipsArr.length; i++ ) {
      let current = zipsArr[i]
      if ( +rangeEnd + 1 === +current ) {
        rangeEnd = current
        continue
      }
      if (rangeStart === rangeEnd) {
        result += `${rangeStart}, `
      } else {
      result += `${rangeStart}-${rangeEnd}, `
      }
      rangeStart = current
      rangeEnd = current
    }
    if (rangeStart === rangeEnd) {
      result += `${rangeStart}`
    } else {
    result += `${rangeStart}-${rangeEnd}`
    }
    res.send(result)
  }
})

app.post('/:zip', (req, res) => {
  let zip = conform(req.params.zip)
  if (zip) {
    zips[zip] = 1
    res.send(`Zip code ${zip} inserted`)
    return
  }
  res.status(400).send()
})

app.delete('/:zip', (req, res) => {
  let zip = conform(req.params.zip)
  if (zip) {
    delete zips[zip]
    res.send(`Zip code ${zip} deleted`)
    return
  }
  res.status(400).send()
})


app.listen(port, () => {
  console.log(`Hello Hiring Manager :) server is listening on ${port}`)
})