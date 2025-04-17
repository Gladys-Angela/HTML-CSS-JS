//template strings/literals

const recipient = "James"

//refactor the email string to use template strings
//const email= "Hey " + recipient + "! How is it going? Cheers Per"
const email= `Hey ${recipient} ! How is it going? Cheers Per`
console.log(email)