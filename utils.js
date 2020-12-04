'use strict'
window.onload = function () {
    /**
     *
     * @param str
     * @returns {boolean}
     */
    function checkBracketsOrder(str) {
        let stack = [];
        let template = '{}()[]';

        for (let i = 0; i < str.length; i++) {
            let index = template.indexOf(str[i]);

            if (index === -1)
                continue;

            if (index % 2) {
                if (stack[stack.length - 1] !== template[index - 1])
                    return  false;

                stack.pop();
            } else {
                stack.push(str[i]);
            }
        }
        return stack.length === 0;
    }

    /**
     *
     * @param str
     * @param backspaceSymbol
     * @returns {string}
     */
    function formatString(str, backspaceSymbol = '#') {
        let stack = [];

        for (let i = 0; i < str.length; i++) {
            if (str[i] === backspaceSymbol) {
                stack.pop();
                continue;
            }

            stack.push(str[i]);
        }

        return stack.join('');
    }

    /**
     *
     * @param cases
     * @param checkFn
     */
    function runTest(cases, checkFn) {
        cases.forEach((el)=>{
            console.log(el, checkFn(el));
        })
    }

    //TESTS BRACKETS
    let brackets = ['(){}[]', '([{}])', '({', '[({})](]', '[(])'];
    runTest(brackets, checkBracketsOrder);

    //TESTS BACKSPACES
    let backspaces = ['abc#d##c', 'abc#', 'ab', 'a#bc#wer##', '',];
    runTest(backspaces, formatString);
}