let h=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'],t=Date.now(),x=8,d='',s='',c=(t*0.0000000001)>>0;
t=t>>0;
while(x--){d=h[t&0xf]+d;t>>=4;}
d=h[c&0xf]+d;c>>= 4;d=h[c&0xf]+d;x=8;

function qid26(){
	let n=Math.random()*1000000000,m=(n-(n>>0))*1000000000,i=7;
	s=h[m&0xf]+h[n&0xf];
	while(i--){m>>=4;n>>=4;s+=h[m&0xf]+h[n&0xf];}
	return d+s;
}

module.exports = qid26;