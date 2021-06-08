console.log('Welcome to Mixed Messages.')

//Store message components

const msgPartAOptions = ['traffic light', 'sea', 'envelope']
const msgPartBOptions = ['car', 'shore', 'stamp']
const msgPartCOptions = [
  "Don't look now, I'm changing",
  'Nothing! It just makes waves',
  "Stick with me, and we'll go places",
]

//Create the message

const msgPartASelection =
  msgPartAOptions[Math.floor(Math.random() * msgPartAOptions.length)]
const msgPartBSelection =
  msgPartBOptions[Math.floor(Math.random() * msgPartBOptions.length)]
const msgPartCSelection =
  msgPartCOptions[Math.floor(Math.random() * msgPartCOptions.length)]

console.log('What did the ' + msgPartASelection + ' say to the ' + msgPartBSelection + '?' + ' "' + msgPartCSelection + '!"')