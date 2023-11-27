// There is a sentence which has a mistake in its ordering.
// The part with a capital letter should be the first word.
// Please build a function for re-ordering
// Examples
// >>> re_ordering('ming Yao')
// 'Yao ming'
// >>> re_ordering('Mano donowana')
// 'Mano donowana'
// >>> re_ordering('wario LoBan hello')
// 'LoBan wario hello'
// >>> re_ordering('bull color pig Patrick')
// 'Patrick bull color pig'


function reOrdering(text){
    const answeredArr = [];
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === arr[i][0].toUpperCase()) {
        answeredArr.unshift(arr[i]);
      } else {
        answeredArr.push(arr[i]);
      }
    }
    return answeredArr.join(" ");
  }