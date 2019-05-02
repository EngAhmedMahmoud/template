let remaining = {
  type: "q",
  lable: "is police man not there?",
  children: {
    yes: {
      type: "i",
      lable: "Enter temp degree",
      children: {
        yes: {},
        no: {},
        both: {},
        normal: {
          type: "q",
          lable: "is there a gas problem?",
          children: {
            yes: {},
            no: {},
            both: {
              type: "e",
              lable: "Esclate",
              children: {
                yes: {},
                no: {},
                both: {},
                normal: {
                  type: "i",
                  lable: "enter password for reset",
                  children: {
                    yes: {},
                    no: {},
                    both: {},
                    normal: {
                      type: "c",
                      lable: "close the alarm",
                      children: {
                        yes: {},
                        no: {},
                        both: {},
                        normal: {}
                      }
                    }
                  }
                }
              }
            },
            normal: {}
          }
        }
      }
    },
    no: {
      type: "a",
      lable: "send sms",
      children: {
        yes: {},
        no: {},
        both: {},
        normal: {
          type: "c",
          lable: "close",
          children: {
            yes: {},
            no: {},
            both: {},
            normal: {}
          }
        }
      }
    },
    both: {},
    normal: {}
  }
};
let finished = [];
//let continuity = Object.keys(remaining).length !== 0 ? true : false;
function nextStep(data) {
  if (data.type === "q") {
    //check if both has a values or not
    if (Object.keys(remaining.children.both).length !== 0) {
      if (data.answer === "yes" || data.answer === "no") {
        //get answer object
        let userAnswer = remaining.children["both"];
        remaining = userAnswer;
        //adding the first object
        finished.push({
          type: data.type,
          answer: data.answer,
          lable: data.lable
        });
      }
    } else {
      //get answer object
      let userAnswer = remaining.children[data.answer];
      remaining = userAnswer;
      //adding the first object
      finished.push({
        type: data.type,
        answer: data.answer,
        lable: data.lable
      });
    }
  }
  if (data.type === "i") {
    let userAnswer = remaining.children["normal"];
    remaining = userAnswer;
    //adding the first object
    finished.push({
      type: data.type,
      answer: data.answer,
      lable: data.lable
    });
  }
  if (data.type === "e") {
    let userAnswer = remaining.children["normal"];
    remaining = userAnswer;
    //adding the first object
    finished.push({
      type: data.type,
      answer: data.answer,
      lable: data.lable
    });
  }
  if (data.type === "c") {
    let userAnswer = "";
    remaining = userAnswer;
    //adding the first object
    finished.push({
      type: data.type,
      answer: data.answer,
      lable: data.lable
    });
  }
  if (data.type === "a") {
    let userAnswer = remaining.children["normal"];
    remaining = userAnswer;
    //adding the first object
    finished.push({
      type: data.type,
      answer: data.answer,
      lable: data.lable
    });
  }
}

function push(finished={}, obj={}) {
  while(finished)
  
}
nextStep({
  type: "q",
  lable: "is police man not there?",
  answer: "yes"
});
// nextStep({
//   type: "a",
//   answer: "send sms to upper levels",
//   lable: "send sms"
// });
// nextStep({
//   type: "c",
//   answer: "close the alarm",
//   lable: "close"
// });

nextStep({
  type: "i",
  lable: "Enter temp degree",
  answer: "120"
});
nextStep({
  type: "q",
  lable: "is there a gas problem?",
  answer: "no"
});
nextStep({
  type: "e",
  lable: "Esclate",
  answer: "esclate"
});
nextStep({
  type: "i",
  lable: "enter password for reset",
  answer: "1234"
});
nextStep({
  type: "c",
  answer: "close",
  lable: "reset the alarm"
});
console.log(remaining);
console.log(finished);
