/* You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9*/

function areaOrPerimeter(l,w){
    // if squer
    if (l == w){
        return l*w
    }else{
        //if rectangle
        return (2(l+w))
    }
}