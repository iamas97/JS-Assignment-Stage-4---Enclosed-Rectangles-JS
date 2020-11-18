//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px'
//}

// function updateStructure1(rect1, rect2) {
//   let rec1 = { ...rect1 }; //JSON.parse(JSON.stringify(rect1));
//   let rec2 = { ...rect2 }; //JSON.parse(JSON.stringify(rect2));
//   //write your code
//   const top1 =
//     rec1["top"] != null ? rec1["top"] : rec1["bottom"] - rec1["height"];
//   const left1 =
//     rec1["left"] != null ? rec1["left"] : rec1["right"] - rec1["width"];
//   const bottom1 =
//     rec1["bottom"] != null ? rec1["bottom"] : rec1["height"] + rec1["top"];
//   const right1 =
//     rec1["right"] != null ? rec1["right"] : rec1["width"] + rec1["left"];
//   console.log(top1, left1, bottom1, right1, "Value1");
//   const top2 =
//     rec2["top"] != null ? rec2["top"] : rec2["bottom"] - rec2["height"];
//   const left2 =
//     rec2["left"] != null ? rec2["left"] : rec2["right"] - rec2["width"];
//   const bottom2 =
//     rec2["bottom"] != null ? rec2["bottom"] : rec2["height"] + rec2["top"];
//   const right2 =
//     rec2["right"] != null ? rec2["right"] : rec2["width"] + rec2["left"];
//   console.log(top2, left2, bottom2, right2, "Value2");
//   const para = ["top", "left", "right", "bottom"];
//   if (
//     (top1 <= top2 &&
//       bottom1 >= bottom2 &&
//       left1 <= left2 &&
//       right1 >= right2) ||
//     (top1 == top2 && bottom1 == bottom2 && left1 == left2 && right1 == right2)
//   ) {
//     console.log("here in cond 1");
//     for (let i = 0; i < para.length; i++) {
//       if (rec2[para[i]] != null) {
//         console.log("here in cond 2");
//         rec2[para[i]] = rec2[para[i]] - rec1[para[i]];
//       }
//     }

//     rec1.children.push(rec2);
//     return rec1;
//   }
//   if (top1 > top2 && bottom1 > bottom2 && left1 > left2 && right1 > right2) {
//     for (let i = 0; i < para.length; i++) {
//       if (rec1[para[i]] != null) {
//         rec1[para[i]] = rec1[para[i]] - rec2[para[i]];
//       }
//     }

//     rec2.children.push(rec1);
//     return rec2;
//   }
//   console.log("here in return");
//   return null;
// }

// function updateStructure(rect1, rect2) {
//   let rec1 = { ...rect1 }; //JSON.parse(JSON.stringify(rect1));
//   let rec2 = { ...rect2 }; //JSON.parse(JSON.stringify(rect2));
  //write your code

  // const top1     = rec1['top']    !=null ? rec1['top']    : (rec1['bottom'] - rec1['height']);
  // const left1    = rec1['left']   !=null ? rec1['left']   : (rec1['right']  - rec1['width']);
  // const bottom1  = rec1['bottom'] !=null ? rec1['bottom'] : (rec1['height'] + rec1['top']);
  // const right1   = rec1['right']  !=null ? rec1['right']  : (rec1['width']  + rec1['left']);
  // console.log(top1,left1,bottom1,right1,"Value1");
  // const top2     = rec2['top']    !=null ? rec2['top']    : (rec2['bottom'] - rec2['height']);
  // const left2    = rec2['left']   !=null ? rec2['left']   : (rec2['right']  - rec2['width']);
  // const bottom2  = rec2['bottom'] !=null ? rec2['bottom'] : (rec2['height'] + rec2['top']);
  // const right2   = rec2['right']  !=null ? rec2['right']  : (rec2['width']  + rec2['left']);
  // console.log(top2,left2,bottom2,right2,"Value2")
  // const all = ()=>

  // let allx = (rec1,rec2)=>{
  // 	let Sf = {
  // 		"top": (a,b,g)=>g(a['top'],b['top']),
  // 		"left": (a,b,g)=>g(a['left'],b['left']),
  // 		"right": (a,b,g)=>g(a['right'],b['right']),
  // 		"bottom": (a,b,g)=>g(a['bottom'],b['bottom']),
  // 		"height": (a,b,g)=>!g(a['height'],b['height']),
  // 		"width" : (a,b,g)=>!g(a['width'],b['width']),

  // 	}
  // 	const gt = (a,b) => a>b;
  // 	const lte = (a,b) => a<=b;
  // 	let found = true;
  // 	for(const i in rec1){
  // 		// if( SideFunc[i] && !SideFunc[i](rec1,rec2,lte)){
  // 		// 	found = false
  // 		// }
  // 		print(i,found,rec1[i],rec2[i]);
  // 	}
  // 	return found;
  // }
//   }
function updateStructure(rect1, rect2) {
	let rec1 = JSON.parse(JSON.stringify(rect1)); 
	let rec2 = JSON.parse(JSON.stringify(rect2)); 
  const allTrue = (rec1, rec2) => {
    const gte = (a, b) => a >= b;
    const lte = (a, b) => a <= b;
    const isTrue = (r1, r2, prop, fn) =>{
      let size = {"height":["bottom","top"],"width":["left","right"]};
      if(prop in size){
        let prop2 = r1[size[prop][0]] ? size[prop][0] : size[prop][1];
        return r1[prop] == null || fn(r1[prop]+r1[prop2], r2[prop]+r2[prop2]);
      
      }
      return r1[prop] == null || fn(r1[prop], r2[prop]);


    }
    return (
      isTrue(rec1, rec2, "top", lte) &&
      isTrue(rec1, rec2, "left", lte) &&
      isTrue(rec1, rec2, "right", lte) &&
      isTrue(rec1, rec2, "bottom", lte) &&
      isTrue(rec1, rec2, "height", gte) &&
      isTrue(rec1, rec2, "width", gte)
    );
  };
  const para = ["top", "left", "right", "bottom"];
  if (allTrue(rec1, rec2)) {
    // console.log("here in cond 1");
    for (let i = 0; i < para.length; i++) {
      if (rec2[para[i]] != null) {
        // console.log("here in cond 2");
        rec2[para[i]] = rec2[para[i]] - rec1[para[i]];
      }
    }

    rec1.children.push(rec2);
    return rec1;
  }
  if (allTrue(rec2,rec1)) {
    for (let i = 0; i < para.length; i++) {
      if (rec1[para[i]] != null) {
        rec1[para[i]] = rec1[para[i]] - rec2[para[i]];
      }
    }

    rec2.children.push(rec1);
    return rec2;
  }
  // console.log("here in return");
  return null;
}
// let RectangleA=
// {
// 	top:20, left:20, height:40, width:60,
// 	position:"absolute",
// 	children:[]
// };
// let RectangleB=
// {
// 	top:0, left:20, height:40, width:70,
// 	position:"relative",
// 	children:[]
// };

// console.log(updateStructure(RectangleB,RectangleA));
// console.log("rect b",RectangleB);

// RectangleB=
// {
// 	top:30, left:30, height:20,width:30,
// 	position:"absolute",
// 	children:[]
// }
// // let RectangleA={
// 	top:20, left:20, height:40, width:60,
// 	position:"absolute",
// 	children:[{
// 	top:10, left:10, height:20, width:30,
// 	position:absolute,
// 	children:[]
//    }]
// }
module.exports = updateStructure;

// let RectangleA = {
//     top: 20,
//     left: 20,
//     height: 40,
//     width: 60,
//     position: "absolute",
//     children: [],
//   },
//   RectangleB = {
//     top: 30,
//     left: 30,
//     height: 20,
//     width: 30,
//     position: "absolute",
//     children: [],
//   };
