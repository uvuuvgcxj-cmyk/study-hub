const fs = require("fs");
const examRaw = fs.readFileSync("C:\\Users\\31428\\exam_data_clean.json", "utf8");
const origQ = JSON.parse(examRaw);
const Q = [];
function a(type,score,topic,diff,text,options,answer,solution,tip) { Q.push([type,score,topic,diff,text,options||[],answer,solution||"",tip||""]); }
origQ.forEach(q => Q.push(q));
// ============ 解析几何 ============
a("选择","3分","解析几何","g","曲线$z=x^2$绕$z$轴旋转所得曲面为",["A.$z=x^2+y^2$","B.$z=x^2-y^2$","C.$x^2+y^2=z^2$","D.$x+y=z$"],"A","绕z轴旋转,x^2→x^2+y^2","绕谁谁不变");
a("选择","3分","解析几何","g","过(1,1,1)且与直线x/1=y/2=z/3垂直的平面方程为",["A.$x+2y+3z=6$","B.$x+y+z=3$","C.$2x+y+z=4$","D.$x+2y+3z=0$"],"A","方向向量(1,2,3)即法向量,代入得x+2y+3z=6","直线方向→平面法向量");
a("填空","4分","解析几何","g","点(1,2,3)到平面2x-2y+z-3=0的距离为","","$\\frac{2}{3}$","d=|2-4+3-3|/√(4+4+1)=2/3","点到平面距离公式");
a("填空","4分","解析几何","g","过(1,0,-1)且与平面x+y+z=0平行的平面方程为","","$x+y+z=0$","平行→法向量相同(1,1,1),代入得x+y+z=0","两平面平行→法向量相同");
a("选择","3分","解析几何","r","两平面2x-y+z=1和x+3y-2z=0的夹角余弦为",["A.$\\frac{3}{\\sqrt{84}}$","B.$\\frac{2}{\\sqrt{6}}$","C.$\\frac{1}{\\sqrt{14}}$","D.$\\frac{3}{\\sqrt{14}}$"],"A","cosθ=|2·1+(-1)·3+1·(-2)|/(√6·√14)=3/√84","两平面夹角公式");
a("选择","3分","解析几何","r","直线L:x/1=(y-1)/2=(z+1)/(-1)与平面π:x+y+z=1",["A.平行","B.垂直","C.在平面上","D.斜交"],"A","方向·法=(1,2,-1)·(1,1,1)=0,点(0,1,-1)不在平面","先点积=0→再验点");
a("选择","3分","解析几何","r","曲面x^2+y^2=2z是",["A.椭圆抛物面","B.旋转抛物面","C.圆锥面","D.椭球面"],"B","x^2+y^2=2z→旋转抛物面","旋转抛物面标准形式");
a("选择","3分","解析几何","a","曲面x^2/4+y^2/9+z^2/16=1与x=0交线是",["A.椭圆","B.双曲线","C.抛物线","D.直线"],"A","代入x=0得y^2/9+z^2/16=1","缺谁截谁");
a("计算","8分","解析几何","a","求过(1,2,3)且与L1:x/1=y/2=z/3和L2:(x-1)/2=y/1=(z+1)/(-1)都垂直的直线方程","","$(x-1)/-5=(y-2)/7=(z-3)/-3$","方向向量s=(1,2,3)×(2,1,-1)=(-5,7,-3)","公垂线→方向=叉积");
a("选择","3分","解析几何","a","曲面x^2-y^2+z^2=-1是",["A.双叶双曲面","B.单叶双曲面","C.无实图形","D.椭球面"],"A","右=-1,左边可正可负→双叶双曲面","符号判别法:右边负数+左边可正可负→双叶");
a("计算","8分","解析几何","a","求点(3,0,-1)到平面2x+y-z+1=0的投影点坐标","","$(-\\frac13,-\\frac23,-\\frac13)$","过点作垂线参数方程→代入平面求t","投影点=垂足");
a("选择","3分","解析几何","g","下列方程表示旋转抛物面的是",["A.$x^2+y^2=4z$","B.$x^2/2+y^2/3=z$","C.$x^2=4z$","D.以上都是"],"A","A中x^2+y^2→绕z轴旋转","旋转体:平方和形式");
a("填空","4分","解析几何","r","直线x/1=y/(-1)=z/2与平面x+y+z=1的交点","","$(\\frac12,-\\frac12,1)$","参数方程x=t,y=-t,z=2t→代入→t=1/2","直线参数化代入平面");
a("选择","3分","解析几何","r","曲面z=x^2+y^2与z=4的交线在xOy投影为",["A.$x^2+y^2=4$","B.点","C.椭圆","D.z=4"],"A","消去z得x^2+y^2=4","交线投影→消z");
a("计算","8分","解析几何","r","判断直线(x-1)/2=y/3=(z+1)/(-1)与x/3=(y-1)/2=(z+2)/1是否共面","","共面","三向量混合积=0→共面","三向量共面→混合积=0");
a("填空","4分","解析几何","g","曲面x^2/4+y^2/9-z^2/16=1与z=0的交线是","","$x^2/4+y^2/9=1$(椭圆)","z=0代入消去z","用z=常数截单叶双曲面→椭圆");
a("选择","3分","解析几何","g","曲面z=x^2+y^2是",["A.椭球面","B.圆锥面","C.旋转抛物面","D.双曲抛物面"],"C","x^2+y^2=z标准形式→旋转抛物面","旋转抛物面");
a("填空","4分","解析几何","r","曲面x^2+y^2=z^2是","","圆锥面","x^2+y^2=z^2→圆锥面","缺常数→圆锥面");
a("选择","3分","解析几何","r","点(1,2,-1)到直线x/2=y/3=z/(-1)的距离为",["A.$\\sqrt{14}$","B.$\\sqrt{7}$","C.2","D.1"],"A","|P0P×s|/|s|","点到直线距离公式");
a("填空","4分","解析几何","r","过(1,0,-1)且与直线x/2=y/3=z/(-1)垂直的平面方程","","$2x+3y-z=3$","法向量(2,3,-1),代入得2x+3y-z=3","直线方向→平面法向量");
a("填空","4分","解析几何","r","直线x/2=y/3=z/4与(x-1)/1=y/2=z/3的夹角余弦为","","$\\frac{20}{\\sqrt{29\\cdot14}}$","cosθ=(2+6+12)/(√29·√14)","两直线夹角公式");
a("计算","8分","解析几何","r","求过(1,1,1)且同时平行于x+y+z=1和x-y+z=0的直线方程","","$(x-1)/2=(y-1)/0=(z-1)/-2$","两法向量叉积得方向(2,0,-2)","平行两平面→方向垂直于两法向量");
console.log("解析几何:", Q.length);
// ============ 微分方程 ============
a("选择","3分","微分方程","g","y''-4y'+4y=0的通解为",["A.$(C_1+C_2x)e^{2x}$","B.$C_1e^{2x}+C_2e^{-2x}$","C.$(C_1+C_2x)e^{-2x}$","D.$C_1e^{2x}+C_2xe^{2x}$"],"A","r^2-4r+4=0→r=2重根","重根→y=(C1+C2x)e^{rx}");
a("选择","3分","微分方程","g","下列是一阶线性微分方程的是",["A.$y\'+y^2=x$","B.$y\'+y/x=x^2$","C.$y\'y=1$","D.$(y\')^2+x=0$"],"B","标准形式y'+P(x)y=Q(x)","一阶线性→y'和y为一次");
a("填空","4分","微分方程","g","y'=2xy的通解为","","$y=Ce^{x^2}$","dy/y=2xdx→ln|y|=x^2+C","可分离变量");
a("填空","4分","微分方程","g","y''+y=0的通解为","","$y=C_1\\cos x+C_2\\sin x$","r^2+1=0→r=±i","共轭复根→三角函数");
a("选择","3分","微分方程","g","y'=y的通解是",["A.$y=e^x+C$","B.$y=Ce^x$","C.$y=e^x$","D.$y=x+C$"],"B","dy/y=dx→ln|y|=x+C→y=Ce^x","一阶可分离");
a("选择","3分","微分方程","r","y''+y'=0满足y(0)=1,y'(0)=1的特解为",["A.$y=2-e^{-x}$","B.$y=1+e^{-x}$","C.$y=2-e^x$","D.$y=1+e^x$"],"A","r^2+r=0→r=0,-1→y=C1+C2e^{-x}→C1=2,C2=-1","两不等实根");
a("计算","8分","微分方程","r","y'+y/x=x^2,y(1)=0","","$y=x^3/4-1/(4x)$","P=1/x,Q=x^2,μ=x,(μy)'=x^3","一阶线性公式");
a("填空","4分","微分方程","r","y''+4y=0的通解为","","$y=C_1\\cos2x+C_2\\sin2x$","r^2+4=0→r=±2i","复根→cos2x,sin2x");
a("计算","8分","微分方程","r","y''-3y'+2y=0,y(0)=1,y'(0)=0","","$y=2e^x-e^{2x}$","r^2-3r+2=0→r=1,2→y=C1e^x+C2e^{2x}→C1=2,C2=-1","两实根代初值");
a("选择","3分","微分方程","r","y'-y=1的通解为",["A.$y=Ce^x-1$","B.$y=Ce^x+1$","C.$y=Ce^{-x}-1$","D.$y=Ce^{-x}+1$"],"A","P=-1,Q=1,μ=e^{-x},(μy)'=e^{-x}→μy=-e^{-x}+C","一阶线性公式");
a("填空","4分","微分方程","r","y'=y^2满足y(0)=1的特解为","","$y=1/(1-x)$","dy/y^2=dx→-1/y=x+C→C=-1","可分离变量,注意分母");
a("选择","3分","微分方程","a","y''-2y'+y=x^2的特解形式应设为",["A.$ax^2+bx+c$","B.$x(ax^2+bx+c)$","C.$x^2(ax^2+bx+c)$","D.$ax^2$"],"A","λ=0不是特征根","非齐次特解形式由自由项+特征根决定");
a("计算","8分","微分方程","a","y''-2y'+y=3cos2x","","$y=(C_1+C_2x)e^x-\\frac{3}{25}\\cos2x+\\frac{4}{25}\\sin2x$","设y*=Acos2x+Bsin2x,代入得A=-3/25,B=4/25","非齐次待定系数");
a("选择","3分","微分方程","a","y''+y=sinx的特解形式为",["A.$A\\cos x+B\\sin x$","B.$x(A\\cos x+B\\sin x)$","C.$A\\cos x$","D.$B\\sin x$"],"B","齐次解含cosx,sinx→需乘x","共振→乘x");
a("计算","8分","微分方程","r","y''+4y=8x,y(0)=0,y'(0)=2","","$y=2x+\\sin2x$","y_h=C1cos2x+C2sin2x,特解y*=2x→C1=0,C2=1","先齐次→再特解→代初值");
a("填空","4分","微分方程","g","y'=e^{x+y}的通解为","","$-e^{-y}+e^x=C$","e^{-y}dy=e^xdx","可分离变量");
a("选择","3分","微分方程","a","y''+4y'+4y=0满足y(0)=1,y'(0)=1的特解为",["A.$(1+3x)e^{-2x}$","B.$(1-3x)e^{-2x}$","C.$(1+x)e^{-2x}$","D.$(1-x)e^{-2x}$"],"A","r=-2重根,y=(C1+C2x)e^{-2x}→C1=1,C2=3","重根代初值");
a("计算","8分","微分方程","a","x^2y''+xy'+y=0的通解","","$y=C_1\\cos(\\ln x)+C_2\\sin(\\ln x)$","欧拉:令x=e^t→y''_t+y=0","欧拉方程→x=e^t→常系数");
a("选择","3分","微分方程","r","微分方程(y')^2+2xy=0的阶数是",["A.一阶","B.二阶","C.三阶","D.零阶"],"A","最高阶y'→一阶","看最高阶导数");
a("计算","8分","微分方程","r","求y''-y=0的通解","","$y=C_1e^x+C_2e^{-x}$","r^2-1=0→r=±1","两不等实根");
a("填空","4分","微分方程","g","y'=2x的通解为","","$y=x^2+C$","直接积分","直接积分法");
a("选择","3分","微分方程","r","微分方程y''=0的通解中独立常数的个数为",["A.0","B.1","C.2","D.3"],"C","二阶→两个独立常数","阶数=常数个数");
console.log("微分方程:", Q.length);
// ============ 多元微分 ============
a("选择","3分","全微分","g","z=e^{xy}在(1,0)处的全微分为",["A.$dx+dy$","B.$dx$","C.$dy$","D.0"],"C","∂z/∂x=ye^{xy}=0,∂z/∂y=xe^{xy}=1,dz=dy","全微分计算步骤");
a("填空","4分","全微分","g","z=x^2+y^2的全微分dz=","","$2xdx+2ydy$","∂z/∂x=2x,∂z/∂y=2y","直接求偏导");
a("选择","3分","多元函数","g","f(x,y)=1/√(x^2+y^2-1)的定义域是",["A.$x^2+y^2<1$","B.$x^2+y^2>1$","C.$x^2+y^2\\ge1$","D.$x^2+y^2\\le1$"],"B","根号内>0→x^2+y^2>1","定义域注意分母≠0");
a("填空","4分","方向导数","g","f(x,y)=x^2+y^2在(1,1)处沿l=(1,1)的方向导数为","","$2\\sqrt{2}$","∇f=(2,2),∂f/∂l=2/√2+2/√2=2√2","方向导数=梯度·单位方向");
a("选择","3分","多元函数","r","f(x,y)={(xy/(x^2+y^2),(x,y)≠(0,0);0,(x,y)=(0,0)}在(0,0)处",["A.连续","B.不连续","C.可微","D.偏导存在"],"B","沿y=kx→k/(1+k^2),随k变→极限不存在","多元极限→沿不同路径");
a("计算","8分","多元函数","r","求f(x,y)=x^2+y^2-xy-x-y的极值","","极小值f(1,1)=-1","f_x=2x-y-1=0,f_y=2y-x-1=0→(1,1),AC-B^2=3>0,A=2>0","无条件极值→驻点+判别式");
a("选择","3分","全微分","r","z=ln(1+x^2+y^2)在(1,1)处的dz=",["A.$\\frac23(dx+dy)$","B.$\\frac13(dx+dy)$","C.$\\frac12(dx+dy)$","D.$\\frac13(dx-dy)$"],"A","∂z/∂x=2x/(1+x^2+y^2)=2/3,∂z/∂y=2/3","全微分定义");
a("填空","4分","隐函数偏导","r","e^z+xyz=0,∂z/∂x=","","$-yz/(e^z+xy)$","F=e^z+xyz,F_x=yz,F_z=e^z+xy","隐函数公式");
a("计算","8分","复合偏导","r","z=f(xy,x/y),f有二阶偏导,求∂z/∂x","","$\\frac{\\partial z}{\\partial x}=yf_u+\\frac1y f_v$","令u=xy,v=x/y,链式法则","链式法则");
a("选择","3分","多元函数","a","f(x,y)=x^3-3xy+y^3的驻点个数为",["A.1","B.2","C.3","D.4"],"B","f_x=3x^2-3y=0,f_y=-3x+3y^2=0→(0,0),(1,1)","驻点=偏导=0的解");
a("填空","4分","方向导数","a","f(x,y,z)=xyz在(1,1,1)处沿l=(1,2,2)的方向导数为","","$7/3$","∇f=(1,1,1),l^0=(1/3,2/3,2/3)","梯度·单位方向");
a("选择","3分","多元函数","r","z=f(x,y)在(x0,y0)处可微的充分条件是",["A.偏导存在","B.偏导连续","C.连续","D.极限存在"],"B","偏导连续→可微","充分条件,非必要");
a("计算","8分","多元函数","a","曲面z=x^2+y^2在(1,1,2)处的切平面方程","","$2x+2y-z=2$","∇F=(2x,2y,-1),在(1,1,2)为(2,2,-1)","曲面切平面:梯度为法向量");
a("选择","3分","多元函数","g","二元函数的梯度∇f是一个",["A.标量","B.向量","C.矩阵","D.张量"],"B","梯度由偏导组成的向量","梯度是向量");
a("填空","4分","应用","r","f(x,y)=x^2+y^2在条件x+y=1下的极小值","","$1/2$","拉格朗日:L=x^2+y^2+λ(x+y-1)→x=y=1/2","条件极值→拉格朗日");
a("计算","8分","多元函数","g","求f(x,y)=x^2+y^2在x+y=1下的条件极值","","极小值1/2","拉格朗日乘数法","条件极值");
console.log("多元微分:", Q.length);
// ============ 重积分 ============
a("选择","3分","二重积分","g","∫_0^1dx∫_0^1xydy=",["A.1/4","B.1/2","C.1","D.3/4"],"A","∫xdx·∫ydy=1/2×1/2=1/4","分离变量");
a("填空","4分","二重积分","g","∬_D(x^2+y^2)dσ,D:x^2+y^2≤R^2=","","$\\frac{\\pi R^4}{2}$","极坐标∫_0^{2π}dθ∫_0^R r^2·rdr=2π·R^4/4","圆域→极坐标");
a("计算","8分","二重积分","g","∬_D(2x+3y)dσ,D由x=0,y=0,x+y=1围成","","$\\frac56$","∫_0^1dx∫_0^{1-x}(2x+3y)dy","直角坐标直接算");
a("选择","3分","二重积分","r","∬_D e^{x^2+y^2}dσ,D:x^2+y^2≤1=",["A.$π(e-1)$","B.$π(e-1)/2$","C.$πe$","D.$π$"],"A","∫_0^{2π}dθ∫_0^1 e^{r^2}rdr=2π·½(e-1)","圆域+x^2+y^2→极坐标");
a("计算","8分","二重积分","r","∬_D x/(1+y^2)dσ,D:y=x^2,y=1,x=-1,x=1","","0","关于x奇函数,区域对称→0","奇偶性简化");
a("选择","3分","三重积分","r","∭_Ω z^2dV,Ω:x^2+y^2+z^2≤1=",["A.$4π/15$","B.$4π/5$","C.$4π/3$","D.$4π/15$"],"A","对称性:∭x^2=∭y^2=∭z^2=⅓∭r^2dV","对称性+球坐标");
a("填空","4分","二重积分","r","交换积分次序:∫_0^1dx∫_0^{x^2}f(x,y)dy=","","$\\int_0^1dy\\int_{\\sqrt{y}}^1f(x,y)dx$","画区域→改变积分次序");
a("计算","8分","三重积分","r","∭_Ω(x^2+y^2)dV,Ω:z=x^2+y^2,z=4围成","","$\\frac{64π}{3}$","柱坐标:∫_0^{2π}dθ∫_0^2 r^3dr∫_{r^2}^4dz","柱坐标→先z再r→最后θ");
a("选择","3分","二重积分","a","∬_D 1/√(1-x^2-y^2)dσ,D:x^2+y^2≤1=",["A.$2π$","B.$π$","C.$2π(√2-1)$","D.$π/2$"],"A","=∫_0^{2π}dθ∫_0^1 r/√(1-r^2)dr=2π","极坐标+凑微分");
a("填空","4分","三重积分","a","∭_Ω dV,Ω:x^2+y^2+z^2≤R^2=","","$\\frac43πR^3$","球体积公式","球体积公式");
a("计算","8分","三重积分","a","z=x^2+y^2,z=0,x^2+y^2=1围成立体体积","","$\\frac{π}{2}$","∬(x^2+y^2)dxdy=∫_0^{2π}dθ∫_0^1 r^2·rdr=π/2","二重积分求体积");
a("选择","3分","二重积分","g","∬_D 1dσ,D:x^2+y^2≤1=",["A.$π$","B.$π^2$","C.$2π$","D.4"],"A","单位圆面积=π","几何意义:面积");
a("填空","4分","二重积分","g","∬_D 2dσ,D:0≤x≤1,0≤y≤1=","","2","2×面积=2","常数倍面积");
a("计算","8分","三重积分","g","∭_Ω dV,Ω:z=0,z=1,x=0,y=0,x+y=1围成","","$\\frac12$","∫_0^1dx∫_0^{1-x}dy∫_0^1dz=∫_0^1(1-x)dx=1/2","三重积分→累次积分");
a("选择","3分","二重积分","r","极坐标下面积元dσ=",["A.$dxdy$","B.$rdrdθ$","C.$drdθ$","D.$r^2drdθ$"],"B","极坐标雅可比为r","极坐标面积元");
a("填空","4分","三重积分","r","柱坐标下体积元dV=","","$rdrdθdz$","柱坐标雅可比为r","柱坐标体积元");
a("计算","8分","二重积分","r","∬_D 1/(x^2+y^2)dσ,D:1≤x^2+y^2≤4","","$2π\\ln2$","∫_0^{2π}dθ∫_1^2 1/r^2·rdr=2π·ln2","极坐标");
a("计算","8分","二重积分","a","∬_D y^2dσ,D由x=0,y=1,y=x围成","","$\\frac14$","∫_0^1dx∫_x^1 y^2dy=∫_0^1(⅓-x³/3)dx=1/4","直角坐标直接算");
a("选择","3分","二重积分","r","∫_0^1dx∫_0^{1-x}ydy=",["A.1/6","B.1/3","C.1/2","D.1"],"A","∫_0^1(1-x)^2/2 dx=1/6","累次积分");
console.log("重积分:", Q.length);
// ============ 曲线曲面积分 ============
a("选择","3分","曲线积分","g","∫_L xds,L:圆弧y=√(1-x^2)从(1,0)→(-1,0)",["A.0","B.1","C.π/2","D.π"],"A","关于x奇函数,弧段对称→0","对称性简化");
a("填空","4分","曲线积分","g","∫_L(x^2+y^2)ds,L是圆周x^2+y^2=R^2","","$2πR^3$","x^2+y^2=R^2,ds=Rdθ→∫_0^{2π}R^2·Rdθ","第一类曲线→参数化");
a("选择","3分","曲线积分","r","∫_L ydx+xdy与路径无关,则∫_{(0,0)}^{(1,2)}ydx+xdy=",["A.0","B.1","C.2","D.3"],"C","∂P/∂y=1=∂Q/∂x,原函数xy→xy|_0^1,2=2","与路径无关→找原函数");
a("计算","8分","格林公式","r","∮_L(2x-y)dx+(x+3y)dy,L:圆周x^2+y^2=1逆时针","","$2π$","Q_x-P_y=1-(-1)=2,∬_D2dxdy=2π","格林公式→二重积分");
a("填空","4分","曲线积分","r","∫_L(2xy-y^4+3)dx+(x^2-4xy^3)dy,从(0,0)→(1,1),与路径无关,则积分=","","4","∂P/∂y=2x-4y^3=∂Q/∂x,原函数F=x^2y-xy^4+3x→F(1,1)-F(0,0)=4","与路径无关判据");
a("计算","8分","曲面积分","r","∬_Σ(x+y+z)dS,Σ:z=2-x-y在第一卦限部分","","$2\\sqrt{3}$","dS=√3dxdy,代入z=2-x-y→∬2√3dxdy=2√3","投影法");
a("选择","3分","曲线积分","a","∫_L(x^2+y^2)dx+(x^2-y^2)dy,L:y=x^2从(0,0)→(1,1)",["A.1/15","B.2/15","C.1/5","D.2/5"],"A","参数化x=t,y=t^2,t:0→1","参数化法");
a("计算","8分","格林公式","a","∫_L(e^xcosy-y)dx+(e^xsiny+x)dy,L从(0,0)→(a,0)沿x轴","","$e^a-1-a$","与路径无关,∫_0^a e^xdx","与路径无关→选简单路径");
a("选择","3分","曲面积分","g","第一类曲面积分∬_Σ dS的几何意义是",["A.体积","B.曲面面积","C.质量","D.长度"],"B","∬_Σ 1dS=曲面面积","几何意义");
a("填空","4分","曲线积分","g","∫_L xyds,L是x轴从0到1的直线段","","0","L上y=0→被积函数xy=0","参数化代入");
a("选择","3分","曲线积分","r","第二类曲线积分与路径无关的条件是",["A.∂P/∂y=∂Q/∂x","B.∂P/∂x=∂Q/∂y","C.P=Q","D.∂P/∂y=-∂Q/∂x"],"A","全微分条件","格林公式逆用");
a("计算","8分","曲面积分","a","∬_Σ z^2dS,Σ是球面x^2+y^2+z^2=R^2","","$\\frac{4πR^4}{3}$","对称性:∬z^2dS=⅓∬R^2dS=⅓R^2·4πR^2","球面对称性");
a("填空","4分","曲线积分","r","∫_{(0,0)}^{(1,1)} e^xsin y dx+e^xcos y dy=","","$e\\sin1$","∂P/∂y=e^xcosy=∂Q/∂x,原函数F=e^xsin y","与路径无关");
a("计算","8分","格林公式","r","∮_L y^2dx+x^2dy,L:|x|+|y|=1逆时针","","0","Q_x-P_y=2x-2y,对称性∬(2x-2y)dxdy=0","格林公式+对称性");
a("选择","3分","曲线积分","g","∫_L ds表示L的",["A.长度","B.面积","C.体积","D.质量"],"A","∫_L 1ds=弧长","几何意义");
a("选择","3分","曲线积分","a","∫_L(x+y)ds,L连接(0,0)和(1,1)的直线段",["A.√2","B.1","C.0","D.2√2"],"A","x=t,y=t,t:0→1,ds=√2dt,∫2t√2dt=√2","第一类曲线参数化");
console.log("曲线曲面积分:", Q.length);
// ============ 级数 ============
a("选择","3分","级数判敛","g","∑ 1/n^2",["A.收敛","B.发散","C.条件收敛","D.不确定"],"A","p=2>1→收敛","p级数:p>1收敛");
a("选择","3分","级数判敛","g","∑ 1/√n",["A.收敛","B.发散"],"B","p=1/2<1→发散","p级数判敛");
a("填空","4分","幂级数","g","∑_{n=0}^∞ x^n的和函数是","","$\\frac{1}{1-x}$,|x|<1","等比级数求和","几何级数");
a("选择","3分","级数判敛","r","∑(-1)^n·1/n",["A.绝对收敛","B.条件收敛","C.发散","D.不确定"],"B","∑1/n发散但交错→条件收敛","交错调和级数条件收敛");
a("计算","8分","幂级数","r","∑ nx^{n-1}的收敛域及和函数","","$|x|<1;S(x)=\\frac{1}{(1-x)^2}$","∑ nx^{n-1}=(∑ x^n)","幂级数→逐项求导");
a("填空","4分","幂级数","r","幂级数∑ x^n/n的收敛域","","$[-1,1)$","R=1,x=-1收敛,x=1发散","注意验端点");
a("计算","8分","幂级数","r","将f(x)=1/(1+x)展开为x的幂级数","","$\\sum_{n=0}^∞(-1)^n x^n$,|x|<1","1/(1+x)=∑(-1)^n x^n","几何级数变体");
a("选择","3分","级数判敛","a","∑ n!/n^n的敛散性是",["A.收敛","B.发散","C.条件收敛","D.不确定"],"A","lim a_{n+1}/a_n=lim(n/(n+1))^n=1/e<1","比值判别法");
a("填空","4分","级数判敛","a","∑_{n=2}^∞ 1/(n·ln n)的敛散性是","","发散","∫_2^∞ dx/(xlnx)=∞","积分判别法");
a("计算","8分","幂级数","a","∑(-1)^n x^{2n}/(2n)!的和函数","","$\\cos x$","cos x的麦克劳林展开","熟记常用展开式");
a("选择","3分","级数判敛","r","∑ 1/(n√n)的敛散性",["A.收敛","B.发散"],"A","∑ 1/n^{3/2},p=3/2>1","p级数形式");
a("填空","4分","幂级数","a","∑_{n=0}^∞ x^n/n!的和函数","","$e^x$","e^x的麦克劳林展开","常用展开式");
a("选择","3分","级数判敛","g","∑_{n=1}^∞ 1/n",["A.收敛","B.发散"],"B","p=1→发散(调和级数)","调和级数发散");
a("计算","8分","幂级数","r","将f(x)=ln(1+x)展开为x的幂级数","","$\\sum_{n=1}^∞(-1)^{n-1}x^n/n$,|x|<1","ln(1+x)=∫dx/(1+x)=∑(-1)^{n-1}x^n/n","逐项积分法");
a("选择","3分","级数判敛","r","∑_{n=1}^∞ 2^n/n!",["A.收敛","B.发散"],"A","lim a_{n+1}/a_n=lim 2/(n+1)=0<1","比值判别法");
a("填空","4分","傅里叶","a","f(x)=x^2(-π<x<π)的傅里叶系数a_0=","","$\\frac{2π^2}{3}$","a_0=1/π∫_{-π}^π x^2dx=2π^2/3","傅里叶系数公式");
a("填空","4分","级数判敛","g","∑ 1/n^p中p__1时收敛","",">","p>1收敛,p≤1发散","p级数");
a("选择","3分","级数判敛","r","∑ 1/n^p当p=1时",["A.收敛","B.发散"],"B","p=1→调和级数→发散","调和级数");
console.log("级数:", Q.length);
// ============ 极限 ============
a("选择","3分","极限","g","lim_{x→0} sinx/x=",["A.0","B.1","C.∞","D.不存在"],"B","重要极限","重要极限");
a("填空","4分","极限","g","lim_{x→∞}(1+1/x)^x=","","$e$","第二个重要极限","");
a("选择","3分","极限","r","lim_{x→0} ln(1+x)/x=",["A.0","B.1","C.∞","D.不存在"],"B","ln(1+x)~x","等价无穷小");
a("填空","4分","极限","r","lim_{x→0} (1-cosx)/x^2=","","$\\frac12$","1-cosx~½x²","等价无穷小");
a("选择","3分","极限","r","lim_{x→0} (tanx-sinx)/x^3=",["A.0","B.1/2","C.1","D.2"],"B","tanx-sinx=sinx(1-cosx)/cosx~x·½x²","泰勒/等价无穷小");
a("计算","8分","极限","a","lim_{x→0} (e^x-1-sinx)/x^2","","$\\frac12$","e^x=1+x+x²/2+..., sinx=x-x³/6+..., 差=x²/2+...","泰勒同阶");
a("填空","4分","极限","g","lim_{n→∞} 1/n·∑_{k=1}^n k/n=","","$\\frac12$","∫_0^1 xdx=1/2","黎曼和→定积分");
a("选择","3分","极限","r","lim_{x→0} (√(1+x)-1)/x=",["A.0","B.1/2","C.1","D.2"],"B","√(1+x)-1~x/2","等价无穷小");
a("计算","8分","极限","r","lim_{n→∞} (1²+2²+...+n²)/n³","","$\\frac13$","∑k²=n(n+1)(2n+1)/6→n³/3","求和→最高次");
a("选择","3分","极限","a","lim_{x→0} (x-sinx)/x³=",["A.0","B.1/6","C.1/3","D.1"],"B","sinx=x-x³/6+O(x⁵)→(x³/6)/x³=1/6","泰勒展开");
a("选择","3分","极限","g","lim_{x→∞} 1/x=",["A.0","B.1","C.∞","D.不存在"],"A","分母→∞→0","基本极限");
a("填空","4分","极限","r","lim_{x→0} (e^x-1)/x=","","1","e^x-1~x","等价无穷小");
a("计算","8分","极限","r","lim_{x→0} (sinx-x)/x³","","$-\\frac16$","sinx-x=(x-x³/6+...)-x=-x³/6","泰勒展开三阶");
a("选择","3分","极限","a","lim_{x→0} (cosx-1)/x²=",["A.0","B.-1/2","C.1/2","D.-1"],"B","cosx-1~-x²/2","等价无穷小");
a("填空","4分","极限","r","lim_{x→0} (1+x)^{1/x}=","","$e$","第二个重要极限","");
a("计算","8分","极限","a","lim_{x→0} (√(1+x)-√(1-x))/x","","1","有理化:2x/(x(√(1+x)+√(1-x)))=1","分子有理化");
a("计算","8分","极限","a","lim_{x→0} (tanx-x)/x³","","$\\frac13$","tanx=x+x³/3+O(x⁵)→(x³/3)/x³=1/3","泰勒展开三阶");
a("选择","3分","极限","r","lim_{x→0} (1-cos2x)/x²=",["A.0","B.1","C.2","D.4"],"C","1-cos2x~½(2x)²=2x²","倍角+等价");
a("选择","3分","极限","a","lim_{x→0} (e^{x²}-1)/x²=",["A.0","B.1","C.2","D.∞"],"B","e^{x²}-1~x²","等价无穷小");
a("选择","3分","极限","r","lim_{x→0} arctanx/x=",["A.0","B.1","C.∞","D.不存在"],"B","arctanx~x","等价无穷小");
a("填空","4分","极限","r","lim_{x→0} (x-arctanx)/x³=","","$\\frac13$","arctanx=x-x³/3+O(x⁵)","泰勒展开");
console.log("极限:", Q.length);
// ============ Generate HTML ============
var t2c = {"解析几何":"g","旋转曲面":"g","微分方程":"o","一阶线性ODE":"o","全微分":"m","隐函数偏导":"m","复合偏导":"m","应用":"m","多元函数":"m","方向导数":"m","三重积分":"k","极坐标":"k","二重积分":"k","曲面积分":"c","曲线积分":"c","格林公式":"c","级数判敛":"s","幂级数":"s","傅里叶":"s","极限":"x","二阶线性ODE":"o"};
var cc = {};
Q.forEach(function(q){var ch=t2c[q[2]]||"x";cc[ch]=(cc[ch]||0)+1;});
console.log("Per chapter:", JSON.stringify(cc));
console.log("Total:", Q.length);

var H = [];
function h(s){H.push(s);}
h("<!DOCTYPE html>");
h('<html lang="zh-CN">');
h("<head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">");
h('<title>高数A1下 · 期末冲刺复习</title>');
h('<link rel="stylesheet" href="./node_modules/katex/dist/katex.min.css">');
h('<script>');
h('var Q = ' + JSON.stringify(Q) + ';');
h('</script>');
h('<script src="./node_modules/katex/dist/katex.min.js"></script>');
h('<style>');
h('*{margin:0;padding:0;box-sizing:border-box}');
h('body{font-family:"Times New Roman",Georgia,serif;background:#f5f5f5;color:#333;display:flex;min-height:100vh}');
h('.sb{width:200px;background:#1a1a2e;color:#e0e0e0;padding:0;flex-shrink:0;display:flex;flex-direction:column;height:100vh;position:sticky;top:0;overflow-y:auto}');
h('.sb-h{background:#e94560;padding:16px;text-align:center;font-size:13px;font-weight:700;color:#fff;letter-spacing:1px;border-bottom:2px solid #c62828}');
h('.sb-h span{font-size:18px;display:block;margin-bottom:2px}');
h('.it{padding:10px 14px;cursor:pointer;border-left:3px solid transparent;font-size:13px;display:flex;align-items:center;gap:6px;transition:.15s;color:#b0b0c8}');
h('.it:hover{background:rgba(233,69,96,0.12);border-left-color:#e94560;color:#fff}');
h('.it.act{background:rgba(233,69,96,0.2);border-left-color:#e94560;color:#fff;font-weight:600}');
h('.tg{background:#e94560;color:#fff;border-radius:10px;padding:1px 7px;font-size:11px;margin-left:auto}');
h('.mn{flex:1;padding:20px 30px;max-width:900px;margin:0 auto}');
h('.h1{font-size:22px;margin-bottom:16px;padding-bottom:10px;border-bottom:2px solid #e94560;color:#1a1a2e}');
h('.h1 span{color:#e94560}');
h('.cd{background:#fff;border:1px solid #e0e0e0;border-radius:6px;padding:16px;margin-bottom:12px;transition:.15s}');
h('.cd:hover{border-color:#b0b0b0;box-shadow:0 1px 4px rgba(0,0,0,0.06)}');
h('.qt{font-size:15px;line-height:1.7;margin-bottom:6px}');
h('.qt strong{color:#1a1a2e;margin-right:4px}');
h('.bg{display:inline-block;background:#e3f2fd;color:#1565c0;font-size:11px;padding:1px 6px;border-radius:3px;margin-right:4px}');
h('.bg.r{background:#fce4ec;color:#c62828}');
h('.bg.g{background:#e8f5e9;color:#2e7d32}');
h('.s0{font-size:11px;color:#888}');
h('.op{padding:4px 8px;margin:2px 0;border-radius:4px;cursor:pointer;font-size:14px;transition:.1s}');
h('.op:hover{background:#f0f0f0}');
h('.op.ok{background:#c8e6c9}');
h('.op.no{background:#ffcdd2}');
h('.bt{background:transparent;border:1px solid #1565c0;color:#1565c0;padding:4px 14px;border-radius:4px;cursor:pointer;font-size:12px;transition:.15s}');
h('.bt:hover{background:#e3f2fd}');
h('.bt.on{background:#1565c0;color:#fff}');
h('.an{display:none;margin-top:8px;padding:12px;background:#f8f9fa;border-left:3px solid #1565c0;border-radius:4px;font-size:13px;line-height:1.6}');
h('.an b{color:#1565c0;font-size:14px}');
h('.tb{display:flex;gap:0;margin-bottom:16px;border-bottom:1px solid #e0e0e0}');
h('.tb .t{padding:8px 16px;cursor:pointer;font-size:13px;border-bottom:2px solid transparent;transition:.15s;color:#666}');
h('.tb .t:hover{color:#1a1a2e}');
h('.tb .t.act{color:#e94560;border-bottom-color:#e94560;font-weight:600}');
h('.pg{display:none}');
h('.pg.act{display:block}');
h('#pf{height:3px;background:#e94560;transition:.3s;border-radius:2px}');
h('#pb{display:flex;align-items:center;gap:8px;margin-bottom:10px;font-size:11px;color:#888}');
h('#ps{font-weight:600;color:#1a1a2e}');
h('</style></head><body>');
h('<div class="sb"><div class="sb-h"><span>📐</span>高数A1下·期末冲刺</div><div id="tr"></div></div>');
h('<div class="mn">');
h('<div id="pb"><div id="pf"></div><span id="ps">0/0</span></div>');
h('<div id="pt" class="h1"><span>📝</span> 全部题目</div>');
h('<div class="tb">');
h('<div class="t act" onclick="sw(0)" id="t0">📝 刷题</div>');
h('<div class="t" onclick="sw(1)" id="t1">📊 分析</div>');
h('<div class="t" onclick="sw(2)" id="t2">✅ 答案</div></div>');
h('<div id="p0" class="pg act"><div id="ql"></div></div>');
h('<div id="p1" class="pg"><div id="kg"></div></div>');
h('<div id="p2" class="pg"><div id="as"></div></div></div>');

// ====== JS Functions ======
h('<script>');
h('function tL(s){if(!s)return"";return s.replace(/∫/g,"\\\\\\int ").replace(/∬/g,"\\\\\\iint ").replace(/∭/g,"\\\\\\iiint ").replace(/∑/g,"\\\\\\sum ").replace(/∮/g,"\\\\\\oint ").replace(/∂/g,"\\\\\\partial ").replace(/π/g,"\\\\\\pi ").replace(/√/g,"\\\\\\sqrt{").replace(/∞/g,"\\\\\\infty ").replace(/→/g,"\\\\\\to ").replace(/≤/g,"\\\\\\le ").replace(/≥/g,"\\\\\\ge ").replace(/·/g,"\\\\\\cdot ").replace(/½/g,"\\\\\\frac12").replace(/¼/g,"\\\\\\frac14").replace(/⅓/g,"\\\\\\frac13").replace(/×/g,"\\\\times ");}');
h('function rM(s){if(!s)return"";try{if(typeof katex!=="undefined")return katex.renderToString(tL(s),{displayMode:false,throwOnError:false})}catch(e){}return s}');
h('var chs=[{n:"全部",i:"📝",id:"all",t:Q.length},{n:"解析几何",i:"📐",id:"g"},{n:"微分方程",i:"🧮",id:"o"},{n:"多元微分",i:"📊",id:"m"},{n:"重积分",i:"🔲",id:"k"},{n:"曲线曲面积分",i:"🌀",id:"c"},{n:"级数",i:"∞",id:"s"},{n:"极限",i:"⚡",id:"x"}];');
h('var fm={g:["解析几何","旋转曲面"],o:["微分方程","一阶线性ODE","二阶线性ODE"],m:["全微分","隐函数偏导","复合偏导","应用","多元函数","方向导数"],k:["三重积分","极坐标","二重积分"],c:["格林公式","曲线积分","曲面积分"],s:["级数判敛","幂级数","傅里叶"],x:["极限"]};');
h('chs.forEach(function(c){if(c.id!="all"){var fs=fm[c.id];c.f=fs;c.t=Q.filter(function(q){return fs.indexOf(q[2])>=0}).length}});');
h('var cf=null;');
// Server-side: convert Unicode math to LaTeX
function conv(s){
  if(!s)return s;
  return s.replace(/∫/g,"\\int ").replace(/∬/g,"\\iint ").replace(/∭/g,"\\iiint ")
    .replace(/∑/g,"\\sum ").replace(/∮/g,"\\oint ").replace(/∂/g,"\\partial ")
    .replace(/π/g,"\\pi ").replace(/∞/g,"\\infty ").replace(/→/g,"\\to ")
    .replace(/≤/g,"\\le ").replace(/≥/g,"\\ge ").replace(/·/g,"\\cdot ")
    .replace(/½/g,"\\frac12").replace(/¼/g,"\\frac14").replace(/⅓/g,"\\frac13")
    .replace(/×/g,"\\times ");
}
// Convert all Q texts
Q.forEach(function(q){
  if(q[4]) q[4]=conv(q[4]);
  if(q[5]&&q[5].length) q[5]=q[5].map(function(x){return conv(x);});
  if(q[6]) q[6]=conv(q[6]);
  if(q[7]) q[7]=conv(q[7]);
  if(q[8]) q[8]=conv(q[8]);
});

// Now HTML building continues
h('function rM(s){if(!s)return"";try{if(typeof katex!=="undefined")return katex.renderToString(s,{displayMode:false,throwOnError:false})}catch(e){}return s}');
h('var chs=[{n:"全部",i:"📝",id:"all",t:Q.length},{n:"解析几何",i:"📐",id:"g"},{n:"微分方程",i:"🧮",id:"o"},{n:"多元微分",i:"📊",id:"m"},{n:"重积分",i:"🔲",id:"k"},{n:"曲线曲面积分",i:"🌀",id:"c"},{n:"级数",i:"∞",id:"s"},{n:"极限",i:"⚡",id:"x"}];');
h('var fm={g:["解析几何","旋转曲面"],o:["微分方程","一阶线性ODE","二阶线性ODE"],m:["全微分","隐函数偏导","复合偏导","应用","多元函数","方向导数"],k:["三重积分","极坐标","二重积分"],c:["格林公式","曲线积分","曲面积分"],s:["级数判敛","幂级数","傅里叶"],x:["极限"]};');
h('chs.forEach(function(c){if(c.id!="all"){var fs=fm[c.id];c.f=fs;c.t=Q.filter(function(q){return fs.indexOf(q[2])>=0}).length}});');
h('var cf=null;');
h('function rs(){var h="";chs.forEach(function(c){h+="<div class=\\"it\\""+(c.id=="all"?" act":"")+" onclick=\\"se(\\""+c.id+"\\")\\">"+c.i+" "+c.n+(c.t?" <span class=\\"tg\\">"+c.t+"<\\/span>":"")+"<\\/div>"});document.getElementById("tr").innerHTML=h}');
h('function se(id){document.querySelectorAll(".it").forEach(function(e,i){var c=chs[i];if(c)e.classList.toggle("act",c.id==id)});var c=chs.find(function(x){return x.id==id});if(!c)return;document.getElementById("pt").innerHTML=c.i+" "+c.n;cf=id=="all"?null:function(q){return c.f.indexOf(q[2])>=0};rq()}');
h('function rq(){var d=cf?Q.filter(cf):Q;var h="";for(var i=0;i<d.length;i++){var u=cf?Q.indexOf(d[i]):i;var q=Q[u];var op="";if(q[5]&&q[5].length>0&&q[5][0]!==""){for(var j=0;j<q[5].length;j++){var l=String.fromCharCode(65+j);op+="<div class=\\"op\\" onclick=\\"so(\\""+u+"\\",\\""+l+"\\")\\">"+rM(q[5][j])+"<\\/div>"}}var an=rM(q[6]||"");var sl=rM(q[7]||"");var tp=q[8]?rM(q[8]):"";h+="<div class=\\"cd\\"><div class=\\"qt\\"><strong>"+(i+1)+".<\\/strong> <span class=\\"bg "+(q[3]=="g"?"g":"r")+"\\">"+q[2]+"<\\/span> <span class=\\"s0\\">["+q[1]+"]<\\/span><\\/div><div class=\\"qt\\">"+rM(q[4])+"<\\/div>"+op+"<button class=\\"bt\\" onclick=\\"ta(\\""+u+"\\")\\" id=\\"b"+u+"\\" style=\\"margin-top:4px\\">查看答案<\\/button><div class=\\"an\\" id=\\"a"+u+"\\"><b>✅ 答案<\\/b><br>"+an+"<br><br><b>📖 解析<\\/b><br>"+sl+(tp?"<br><br><span style=\\"background:#e8eaf6;padding:2px 6px;border-radius:3px;font-size:12px;display:inline-block\\">💡 "+tp+"<\\/span>":"")+"<\\/div><\\/div>"}document.getElementById("ql").innerHTML=h||"<div style=\\"text-align:center;padding:40px;color:#888\\">暂无题目<\\/div>";up()}');
h('function sw(i){document.querySelectorAll(".t").forEach(function(t,j){t.classList.toggle("act",j==i);document.getElementById("p"+j).classList.toggle("act",j==i)});if(i==0)rq();if(i==1)rk();if(i==2)ra()}');
h('function ta(i){var b=document.getElementById("a"+i),t=document.getElementById("b"+i);if(!b||!t)return;if(b.style.display=="block"){b.style.display="none";t.textContent="查看答案";t.classList.remove("on")}else{b.style.display="block";t.textContent="收起答案";t.classList.add("on")}up()}');
h('function so(i,v){var q=Q[i];if(!q)return;var r=document.getElementsByName("r"+i);for(var j=0;j<r.length;j++){var o=r[j].parentElement;o.classList.remove("ok","no");if(r[j].value==v){r[j].checked=true;o.classList.add(v==q[6]?"ok":"no")}}var b=document.getElementById("a"+i),t=document.getElementById("b"+i);if(b&&b.style.display!="block"){b.style.display="block";t.textContent="收起答案";t.classList.add("on")}up()}');
h('function up(){var n=0;for(var i=0;i<Q.length;i++){var b=document.getElementById("a"+i);if(b&&b.style.display=="block")n++}document.getElementById("pf").style.width=Math.round(n/Q.length*100)+"%";document.getElementById("ps").textContent=n+"/"+Q.length}');

function rk(){
  var h="<div style='padding:16px'><h2 style='font-size:15px;margin-bottom:10px;color:#1a1a2e'>📊 易错统计</h2><div style='display:grid;grid-template-columns:repeat(2,1fr);gap:8px'>";
  var topics={};Q.forEach(function(q){topics[q[2]]=(topics[q[2]]||0)+1});
  var keys=Object.keys(topics).sort();
  keys.forEach(function(k){h+="<div style='background:#fff;padding:8px;border-radius:6px;border:1px solid #e0e0e0;text-align:center'><div style='font-size:18px;font-weight:700;color:#e94560'>"+topics[k]+"</div><div style='font-size:10px;color:#888'>"+k+"</div></div>";});
  h+="</div><div style='background:#fff;padding:10px;border-radius:6px;margin-top:10px;border:1px solid #e0e0e0'><b style='color:#e94560'>🎯 必考题型</b><br><span style='font-size:12px;line-height:2'>· 一阶线性ODE: y'+Py=Q => mu y=int mu Q dx<br>· 幂级数和函数: 分母有n先导后积<br>· 格林公式: 不封闭 补线 格林 减补线<br>· 拉格朗日乘数法: 条件极值</span></div><div style='background:#fff;padding:10px;border-radius:6px;margin-top:10px;border:1px solid #e0e0e0'><b style='color:#c62828'>⚠️ 失分陷阱</b><br><span style='font-size:12px;line-height:2'>1. 隐函数偏导忘负号 2. 极坐标忘乘r<br>3. 收敛域忘验端点 4. 格林忘补线 5. 重根忘乘x</span></div></div>";
  document.getElementById("kg").innerHTML=h;
}

h('function ra(){var h="<div style=\\"padding:16px\\"><h2 style=\\"font-size:15px;margin-bottom:10px;color:#1a1a2e\\">✅ 答案速查<\\/h2>";for(var i=0;i<Q.length;i++){var q=Q[i];h+="<div style=\\"padding:3px 0;border-bottom:1px solid #e0e0e0;font-size:12px;display:flex;gap:6px\\"><span style=\\"color:#888;min-width:25px\\">"+(i+1)+".<\\/span><span style=\\"flex:1;overflow:hidden;white-space:nowrap;color:#555\\">"+q[4].substring(0,40)+"<\\/span><span style=\\"color:#1565c0;font-weight:600;min-width:50px;text-align:right\\">"+(q[6]||"")+"<\\/span><\\/div>"}document.getElementById("as").innerHTML=h+"<\\/div>"}');
h('rs();rq();');
h('</script></body></html>');

// Write the HTML file
fs.writeFileSync("C:\\Users\\31428\\study-hub-visual\\index.html", H.join("\n"), "utf8");
console.log("✅ index.html written! Size:", H.join("\n").length, "bytes");
