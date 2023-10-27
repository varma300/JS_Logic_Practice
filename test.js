/*

## Question 2:

When coloring a striped pattern, you may start by coloring each square *sequentially*, meaning you spend time needing to *switch coloring pencils*.

Create a function where given an *array of colors* `cols`, return how long it takes to color the whole pattern. Note the following times:

- It takes **1 second** to *switch between pencils*.
- It takes **2 seconds** to *color a square*.

color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

// There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// 10 + 4 = 14
*/

function color_pattern_times(e){
    let len = e.length;
    let out =(len*2) + (len-1);
    console.log(out);

}


color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"])


