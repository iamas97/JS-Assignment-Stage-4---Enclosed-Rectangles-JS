//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px'
//}

function updateStructure(rec1,rec2){
	//write your code
	const top1  = rec1['top']!=null    ? rec1['top']    : (rec1['bottom'] - rec1['height']);
	const left1 = rec1['left']!=null    ? rec1['left']   : (rec1['right'] - rec1['width']);
	const bottom1    = rec1['bottom'] !=null ? rec1['bottom'] : (rec1['height']+rec1['top']);
	const right1    = rec1['right']!=null   ? rec1['right']  : (rec1['width']+rec1['left']);


	const top2 = rec2['top']!=null ? rec2['top'] : (rec2['bottom'] - rec2['height']);
	const left2 = rec2['left']!=null ? rec2['left'] : (rec2['right'] - rec2['width']);
	const bottom2    = rec2['bottom'] !=null   ? rec2['bottom'] : (rec2['height'] + rec2['top']);
	const right2    = rec2['right']   !=null   ? rec2['right']  : (rec2['width']  + rec2['left']);

	if(top1<top2 && bottom1>bottom2 && left1<left2 && right1>right2){
		result = {

		}
		para = ['top','left','right',"bottom1"]
		for(let i=0;i<para.length;i++){
			if(rec2[para[i]]!=null){
				result[para[i]] = rec2[para[i]] - rec1[para[i]];
			}
		}
		if(rec2['height']!=null){
			result['height'] = rec2['height'];
		}
		if(rec2['width']!=null){
			result['width'] = rec2['width'];
		}
		result['children'] = rec2.children;
		result['position'] = rec2.position;
		rec1.children.push(result);
		return rec1
	}
	if(top1>top2 && bottom1<bottom2 && left1>left2 && right1<right2){
		result ={}
		para = ['top','left','right',"bottom1"]
		for(let i=0;i<para.length;i++){
			if(rec1[para[i]]!=null){
				result[para[i]] = rec1[para[i]] - rec2[para[i]];
			}
		}
		if(rec1['height']!=null){
			result['height'] = rec1['height'];
		}
		if(rec1['width']!=null){
			result['width'] = rec1['width'];
		}
		result['children'] = rec1.children;
		result['position'] = rec1.position;
		rec2.children.push(result);
		return rec2
	}
}

module.exports = updateStructure;

/*
let RectangleA=
{
	top:20, left:20, height:40, width:60,
	position:"absolute",
	children:[]
};
let RectangleB=
{ 
	top:30, left:30, height:20,width:30,
	position:"absolute",
	children:[]
}

Should be transformed to

RectangleA:{ 
	top:20, left:20, height:40, width:60,
	position:absolute,
	children:[{
	top:10, left:10, height:20, width:30,
	position:absolute,
	children:[]
   }]
}
*/