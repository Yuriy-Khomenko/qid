let h=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'],t=Date.now()>>0,x=8,d='',s='';
while(x--){d=h[t&0xf]+d;t>>=4;}x=9;

function qid16(){
	if(x<9)return d+s.slice(0+x,8+x++);
	x=1;let n=Math.random()*1000000000,m=(n-(n>>0))*1000000000,i=7;
	s=h[m&0xf]+h[n&0xf];
	while(i--){m>>=4;n>>=4;s+=h[m&0xf]+h[n&0xf];}
	return d+s.slice(0,8);
}

module.exports = qid16;