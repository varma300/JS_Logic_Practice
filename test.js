`Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false`

let s = "rat", t = "cat"

var isAnagram = function (s, t) {
    s = s.split('');
    t = t.split('');
    let out;


    if (s.length === t.length) {
        for (i = 0; i < s.length; i++) {
            for (j = 0; j < s.length; j++) {

                if (s[i] === t[j]) {
                    delete t[j]
                    break;
                }

            }
            out = (t[i]===undefined)? true : false;

        }
        return (out);
    } else {
       return (false);
    }
};
console.log(isAnagram(s, t));
