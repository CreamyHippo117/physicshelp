PH.unit({
  id:"prereq1", course:"prereq", order:10, hours:2.5,
  title:"Prereq 1: Units, vectors and scale",
  blurb:"The toolkit every later unit assumes: SI units and dimensional analysis as a built-in error check, honest sig figs, order-of-magnitude estimation, 2D/3D vectors with dot and cross products, and the small-angle approximation.",
  needs:[],
  goals:[
    "Convert between units and use dimensional analysis to catch wrong formulas (and to guess right ones)",
    "Report answers with a sensible number of significant figures and estimate quantities to within a factor of ~3",
    "Resolve vectors into components, find magnitudes and unit vectors in 2D and 3D",
    "Compute dot and cross products both from components and from $|A||B|\\cos\\theta$, $|A||B|\\sin\\theta$, and use the right-hand rule",
    "Justify and use $\\sin\\theta\\approx\\theta$, $\\cos\\theta\\approx1-\\theta^2/2$, $\\tan\\theta\\approx\\theta$ for small angles"
  ],
  lessons:[
  {id:"l1", title:"SI units and dimensional analysis", html:String.raw`
<p>A physical quantity is a number <b>times a unit</b>. The number alone means nothing: "5" could be 5 seconds or 5 light-years. Physics uses the SI system, built from seven base units. For the AP you need only four, and a few derived ones:</p>
<table><tr><th>Quantity</th><th>Symbol for its dimension</th><th>SI unit</th></tr>
<tr><td>length</td><td>L</td><td>meter (m)</td></tr>
<tr><td>mass</td><td>M</td><td>kilogram (kg)</td></tr>
<tr><td>time</td><td>T</td><td>second (s)</td></tr>
<tr><td>electric current</td><td>I</td><td>ampere (A)</td></tr></table>
<p>Everything else is a combination. A <b>newton</b> (N, the unit of force) is defined as $1\ \text{N}=1\ \text{kg}\cdot\text{m/s}^2$. A <b>joule</b> (J, energy) is $1\ \text{N}\cdot\text{m}=1\ \text{kg}\cdot\text{m}^2/\text{s}^2$. A <b>watt</b> (W, power) is 1 J/s. A <b>coulomb</b> (C, charge) is 1 A$\cdot$s. A <b>pascal</b> is 1 N/m$^2$. You will define each of these properly when it appears; for now just learn to unpack them into kg, m, s, A.</p>
<p><b>Prefixes</b> you must know cold: $\text{k}=10^3$, $\text{c}=10^{-2}$, $\text{m}=10^{-3}$, $\mu=10^{-6}$, $\text{n}=10^{-9}$, $\text{p}=10^{-12}$, and M $=10^6$. Convert by multiplying by a fraction equal to 1: $72\ \text{km/h}=72\cdot\dfrac{1000\ \text{m}}{3600\ \text{s}}=20\ \text{m/s}$.</p>
<div class="box key"><b>Dimensional analysis as an error check.</b> You can only add or equate quantities with the same dimensions, and arguments of $\sin$, $\exp$, $\ln$ must be dimensionless. So every correct equation balances dimensionally. After you derive a formula, replace each symbol by its units and check the result. This catches a large fraction of algebra errors in seconds, and the AP rewards you for it (a one-line "units check: m/s on both sides" is a sign of an expert).</div>
<p><b>Example of the check.</b> Is the distance fallen $d=\tfrac12gt$ or $\tfrac12gt^2$? $g$ has units m/s$^2$. $gt$ has m/s (a speed), but $gt^2$ has m. Only the second can be a distance.</p>
<p><b>Dimensional analysis as a way to guess formulas.</b> Suppose you suspect the period of a pendulum depends on its length $\ell$, the gravitational acceleration $g$, and the mass $m$ of the bob. Write $T\propto m^a\ell^b g^c$ and match units (this is Example 1). You find it must be $T\propto\sqrt{\ell/g}$ and the mass cannot appear. The method cannot give pure-number factors like $2\pi$; those need real physics.</p>
<div class="box trap"><b>Trap:</b> Dimensional consistency is necessary, not sufficient. $\tfrac12gt^2$ and $gt^2$ both have units of length. The check cannot catch a missing factor of 2, or a wrong sign. It also cannot distinguish quantities that share units: torque and energy are both N$\cdot$m, but they are different things.</div>`},
  {id:"l2", title:"Significant figures and order-of-magnitude estimation", html:String.raw`
<p><b>Significant figures, sanely.</b> A number's significant figures tell the reader how well you know it. The AP does not penalize you for 2 versus 3 sig figs on a final answer, but it does expect you not to report $14.592$ m$^2$ from inputs known to two digits, and it expects your answer to be consistent with the data given. Working rules:</p>
<ul>
<li>Multiplying or dividing: keep as many sig figs as the <i>least</i> precise input. $3.2\times4.56=14.592\to15$.</li>
<li>Adding or subtracting: keep as many decimal places as the least precise input.</li>
<li><b>Carry extra digits through a multi-step calculation</b> and round only at the end. Better yet, keep everything symbolic until the very last line (a habit this course will drill).</li>
<li>Exact numbers (a count of 3 cars, the 2 in $2\pi r$) have unlimited sig figs.</li>
<li>Giving 2 or 3 sig figs is almost always right in this course. Giving 8 digits from a calculator signals you are not thinking.</li>
</ul>
<p><b>Order-of-magnitude (Fermi) estimation.</b> Physicists estimate before they calculate. The goal is a number within a factor of about 3 using round numbers you know, and it doubles as a sanity check on exact answers. Method: break the question into pieces you can estimate, multiply, and keep track of units.</p>
<p>Examples of numbers worth memorizing to one digit: a year is $\approx3\times10^7$ s; Earth's radius $6\times10^6$ m; the Earth-Sun distance $1.5\times10^{11}$ m; a person has mass $\sim70$ kg; air has density $1.2$ kg/m$^3$; water $1000$ kg/m$^3$; an atom is $\sim10^{-10}$ m across; the speed of light is $3\times10^8$ m/s.</p>
<div class="box key"><b>Sanity-check habit.</b> After any numerical answer ask: is it plausible? A car moving at $2\times10^5$ m/s or a bowling ball with energy $10^{-9}$ J means a slip (usually a unit conversion or a misplaced exponent). Note that 3-4 minutes of estimating can save a point on an FRQ and many on the MCQ, where wrong choices are often off by obvious factors of 10.</div>
<p><b>Powers of ten and scientific notation.</b> $(2\times10^3)(4\times10^{-5})=8\times10^{-2}$; $\sqrt{9\times10^{6}}=3\times10^{3}$. Always write $\sqrt{\ }$ of an odd power by shifting: $\sqrt{4\times10^{5}}=\sqrt{40\times10^{4}}\approx6.3\times10^2$.</p>`},
  {id:"l3", title:"Vectors: components, magnitude, unit vectors", html:String.raw`
<p>A <b>scalar</b> has only a size (mass, time, energy, temperature). A <b>vector</b> has a size <i>and</i> a direction (displacement, velocity, force, electric field), written $\vec A$ or in bold. Vectors add tip-to-tail and the sum is independent of the order. Physics laws like Newton's second law hold <i>component by component</i>, which is why we need components.</p>
<svg class="fig" viewBox="0 0 320 200" width="320" role="img" aria-label="A vector A in the xy plane at angle theta above the x axis with dashed components Ax along x and Ay along y">
<defs><marker id="p1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="currentColor"/></marker></defs>
<line x1="30" y1="170" x2="300" y2="170" stroke="currentColor" marker-end="url(#p1a)"/><line x1="30" y1="170" x2="30" y2="15" stroke="currentColor" marker-end="url(#p1a)"/>
<line x1="30" y1="170" x2="230" y2="60" stroke="currentColor" stroke-width="2.5" marker-end="url(#p1a)"/>
<line x1="30" y1="170" x2="230" y2="170" stroke="currentColor" stroke-dasharray="5 4" stroke-width="2"/><line x1="230" y1="170" x2="230" y2="62" stroke="currentColor" stroke-dasharray="5 4" stroke-width="2"/>
<path d="M70,170 A40,40 0 0 0 66,150" fill="none" stroke="currentColor"/>
<text x="305" y="174">x</text><text x="36" y="18">y</text><text x="120" y="105">A</text><text x="80" y="164" font-size="12">θ</text><text x="120" y="188">A_x = A cos θ</text><text x="236" y="120">A_y = A sin θ</text></svg>
<p>In 2D, a vector at angle $\theta$ above the $+x$ axis has components</p>
$$A_x=A\cos\theta,\qquad A_y=A\sin\theta,\qquad A=\sqrt{A_x^2+A_y^2},\qquad \tan\theta=\frac{A_y}{A_x}.$$
<p>In 3D, $A=\sqrt{A_x^2+A_y^2+A_z^2}$. Components are <b>signed</b> numbers: a vector pointing down-left has two negative components.</p>
<p><b>Unit vectors.</b> $\hat x,\hat y,\hat z$ (also written $\hat i,\hat j,\hat k$) are vectors of length 1 along the axes. Then $\vec A=A_x\hat x+A_y\hat y+A_z\hat z$. The unit vector in the direction of $\vec A$ is $\hat A=\vec A/A$. A unit vector carries <b>no units</b>; it just labels direction. Example: $\vec A=(3,4,0)$ has $A=5$ and $\hat A=(0.6,0.8,0)$.</p>
<p><b>Adding</b> is component-wise: $\vec A+\vec B=(A_x+B_x,\ A_y+B_y,\ A_z+B_z)$. Multiplying by a scalar scales every component.</p>
<div class="box trap"><b>Trap:</b> Which trig function goes with which component depends on <i>where the angle is measured from</i>. For a force on an incline of angle $\theta$, the component of gravity <i>along</i> the slope is $mg\sin\theta$ and <i>perpendicular</i> is $mg\cos\theta$, since $\theta$ is measured from the horizontal and the slope is tilted by $\theta$ from the horizontal. Always check limits: at $\theta=0$ (flat) the along-slope component must vanish. $\sin0=0$. Good.</div>
<p>Calculus bridge: derivatives and integrals of vectors act on components. If $\vec r(t)=(x(t),y(t))$ then $\vec v=d\vec r/dt=(\dot x,\dot y)$. That single idea is the whole of 2D kinematics.</p>`},
  {id:"l4", title:"Dot and cross products", html:String.raw`
<p>There are two ways to multiply vectors, and physics needs both.</p>
<p><b>Dot (scalar) product.</b> Result: a scalar.</p>
$$\vec A\cdot\vec B=AB\cos\theta=A_xB_x+A_yB_y+A_zB_z$$
<p>where $\theta$ is the angle between them (tails together). It measures "how much of $\vec A$ points along $\vec B$, times $|B|$". It is 0 for perpendicular vectors, and $AB$ for parallel ones. Also $\vec A\cdot\vec A=A^2$. <b>Physics preview:</b> work done by a constant force is $W=\vec F\cdot\Delta\vec r$. A force perpendicular to the motion does no work. Magnetic forces always do zero work for exactly this reason.</p>
<p><b>Cross (vector) product.</b> Result: a vector.</p>
$$|\vec A\times\vec B|=AB\sin\theta,\qquad \vec A\times\vec B=(A_yB_z-A_zB_y,\ A_zB_x-A_xB_z,\ A_xB_y-A_yB_x)$$
<p>The direction is perpendicular to both $\vec A$ and $\vec B$, found by the <b>right-hand rule</b>: point the fingers of your right hand along $\vec A$, curl them toward $\vec B$ (through the smaller angle), and your thumb points along $\vec A\times\vec B$. The magnitude is the area of the parallelogram the two vectors span. It is 0 for parallel vectors.</p>
<svg class="fig" viewBox="0 0 340 190" width="340" role="img" aria-label="A points along +x, B points along +y, and the cross product A cross B points out of the page, shown as a circle with a dot">
<defs><marker id="p1b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="currentColor"/></marker></defs>
<line x1="60" y1="150" x2="210" y2="150" stroke="currentColor" stroke-width="2.5" marker-end="url(#p1b)"/><line x1="60" y1="150" x2="60" y2="25" stroke="currentColor" stroke-width="2.5" marker-end="url(#p1b)"/>
<path d="M95,150 A35,35 0 0 0 60,115" fill="none" stroke="currentColor" stroke-dasharray="3 3"/>
<circle cx="60" cy="150" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="150" r="2.5" fill="currentColor"/>
<text x="215" y="154">A (along +x)</text><text x="70" y="30">B (along +y)</text><text x="76" y="178">A×B points OUT of the page (toward you)</text>
<text x="200" y="85" font-size="12">curl fingers from A to B:</text><text x="200" y="102" font-size="12">thumb comes out of page</text></svg>
<div class="box key"><b>Order matters:</b> $\vec B\times\vec A=-\ \vec A\times\vec B$. And $\hat x\times\hat y=\hat z,\ \hat y\times\hat z=\hat x,\ \hat z\times\hat x=\hat y$ (cyclic). Reverse the order and each gets a minus sign. The dot product, by contrast, is commutative.</div>
<p><b>Physics previews</b> (you will meet them properly later; just see the pattern): <b>torque</b> $\vec\tau=\vec r\times\vec F$ (a twisting effect, where $\vec r$ points from the pivot to where the force acts); <b>magnetic force</b> on a moving charge $\vec F=q\vec v\times\vec B$; <b>angular momentum</b> $\vec L=\vec r\times\vec p$. In each case the result is perpendicular to the two inputs, and the size has a $\sin\theta$ because only the perpendicular part counts.</p>
<div class="box trap"><b>Trap:</b> Mixing up which function goes with which product. Dot goes with $\cos$ (parallel parts count), cross goes with $\sin$ (perpendicular parts count). Quick test: for parallel vectors the dot product is largest and the cross product is zero.</div>
<p><b>Mnemonic for components:</b> the cross product is the determinant of the $3\times3$ array with rows $\hat x\,\hat y\,\hat z$; $A_x\,A_y\,A_z$; $B_x\,B_y\,B_z$. If you have done linear algebra, you already know it.</p>`},
  {id:"l5", title:"Trig in physics and the small-angle approximation", html:String.raw`
<p>You will use a short list of trig facts repeatedly: $\sin^2\theta+\cos^2\theta=1$; $\sin2\theta=2\sin\theta\cos\theta$; the sine and cosine of $0^\circ,30^\circ,45^\circ,60^\circ,90^\circ$ (memorize: $\tfrac12,\ \tfrac{\sqrt2}{2},\ \tfrac{\sqrt3}{2}$); and that <b>angles in calculus formulas are in radians</b>: $\theta_\text{rad}=\theta_\text{deg}\cdot\pi/180$. A derivative like $\tfrac{d}{d\theta}\sin\theta=\cos\theta$ is only true in radians.</p>
<p><b>Small-angle approximation.</b> Taylor-expand about $\theta=0$:</p>
$$\sin\theta=\theta-\frac{\theta^3}{6}+\cdots,\qquad \cos\theta=1-\frac{\theta^2}{2}+\cdots,\qquad \tan\theta=\theta+\frac{\theta^3}{3}+\cdots$$
<p>For $|\theta|\ll1$ rad, keep the first nonzero term:</p>
$$\sin\theta\approx\theta,\qquad\tan\theta\approx\theta,\qquad\cos\theta\approx1-\tfrac12\theta^2\ (\approx1\text{ to first order}).$$
<svg class="fig" viewBox="0 0 340 190" width="340" role="img" aria-label="Graph of sin theta versus theta in radians, compared with the straight line y equals theta; they agree near zero and separate for larger angles">
<line x1="40" y1="160" x2="330" y2="160" stroke="currentColor"/><line x1="40" y1="160" x2="40" y2="12" stroke="currentColor"/>
<line x1="40" y1="160" x2="316" y2="22" stroke="currentColor" stroke-dasharray="6 4"/>
<polyline fill="none" stroke="currentColor" stroke-width="2.5" points="40,160 52,154 63,149 74,143 86,137 98,132 109,126 121,121 132,115 144,110 155,105 166,100 178,95 190,90 201,86 212,82 224,78 236,74 247,70 258,66 270,63 282,60 293,58 305,55 316,53"/>
<text x="318" y="178">θ (rad)</text><text x="16" y="14">y</text><text x="250" y="36" font-size="12">y = θ (dashed)</text><text x="235" y="100" font-size="12">y = sin θ</text><text x="46" y="52" font-size="12">they agree for small θ</text></svg>
<p><b>How small is small?</b> At $\theta=0.1$ rad ($5.7^\circ$), $\sin\theta=0.0998$, an error of 0.17%. At $\theta=0.2$ rad ($11.5^\circ$) the error in $\sin\theta\approx\theta$ is about 0.7%. At $\theta=0.5$ rad ($29^\circ$) it is about 4%. The relative error of $\sin\theta\approx\theta$ is roughly $\theta^2/6$, the first dropped term divided by $\theta$. So in AP problems, anything under about $10^\circ$ is safe.</p>
<p><b>Why it matters.</b> It turns hard equations into solvable ones. For a pendulum, the equation of motion is $\ddot\theta=-(g/\ell)\sin\theta$, which has no simple closed-form solution. Replace $\sin\theta$ by $\theta$ and you get $\ddot\theta=-(g/\ell)\theta$, which is the equation of simple harmonic motion with $\omega=\sqrt{g/\ell}$. You will do exactly that in Mechanics 6.</p>
<p>It also gives you the <b>binomial approximation</b> $(1+x)^n\approx1+nx$ for $|x|\ll1$ (the next Taylor term). Use it for questions like "what is the field far from a dipole?" or "what is $\sqrt{1.02}$?" ($\approx1.01$).</p>
<div class="box trap"><b>Trap:</b> Do not apply $\sin\theta\approx\theta$ with $\theta$ in degrees. $\sin(5^\circ)\approx0.087$, not $5$. Also: the cosine needs more care. $\cos\theta\approx1$ is correct to first order but gives zero for $1-\cos\theta$, which is physically important (it is the height gained by a pendulum: $h=\ell(1-\cos\theta)\approx\ell\theta^2/2$). Keep the $\theta^2/2$ term when you subtract from 1.</div>`}
  ],
  examples:[
  {id:"x1", title:"Guessing the pendulum period by dimensional analysis", problem:String.raw`<p>A small bob of mass $m$ hangs from a string of length $\ell$ near Earth, where the gravitational acceleration is $g$ (units m/s$^2$). Assume the period $T$ depends only on $m$, $\ell$ and $g$ as a product of powers. Use dimensional analysis to find how $T$ depends on them.</p>`,
   solution:String.raw`<p>Write $T=C\,m^a\ell^bg^c$, with $C$ a dimensionless constant. Dimensions: $[T]=\text{s}$, $[m]=\text{kg}$, $[\ell]=\text{m}$, $[g]=\text{m}\,\text{s}^{-2}$. Match the exponents:</p>
<p>kg: $0=a$. m: $0=b+c$. s: $1=-2c$. So $a=0$, $c=-\tfrac12$, $b=+\tfrac12$.</p>
$$T=C\sqrt{\ell/g}.$$
<p>Mass cannot appear (there is no other way to cancel kg). Dimensional analysis cannot give $C$; real physics gives $C=2\pi$. It does correctly predict that quadrupling the length doubles the period.</p>`},
  {id:"x2", title:"Work, torque and the vector products", problem:String.raw`<p>(a) A force $\vec F=(3,-2,4)$ N acts on an object that is displaced by $\Delta\vec r=(2,5,-1)$ m. Find the work $W=\vec F\cdot\Delta\vec r$.<br>(b) A force $\vec F=(0,3,4)$ N acts at the point $\vec r=(2,0,0)$ m relative to a pivot. Find the torque $\vec\tau=\vec r\times\vec F$ and its magnitude, and check the magnitude using $rF\sin\theta$.</p>`,
   solution:String.raw`<p>(a) $W=3(2)+(-2)(5)+4(-1)=6-10-4=-8$ J. Negative work: the force has a component opposing the displacement.</p>
<p>(b) $\vec\tau=(r_yF_z-r_zF_y,\ r_zF_x-r_xF_z,\ r_xF_y-r_yF_x)=(0-0,\ 0-2\cdot4,\ 2\cdot3-0)=(0,-8,6)$ N$\cdot$m. Magnitude $=\sqrt{64+36}=10$ N$\cdot$m.</p>
<p>Check: $r=2$ m, $F=\sqrt{9+16}=5$ N. $\vec r\cdot\vec F=0$ so $\theta=90^\circ$ and $rF\sin\theta=2\cdot5\cdot1=10$ N$\cdot$m. &#10003; Also $\vec\tau\cdot\vec r=0$ and $\vec\tau\cdot\vec F=-24+24=0$, so $\vec\tau$ is perpendicular to both, as it must be.</p>`},
  {id:"x3", title:"A Fermi estimate", problem:String.raw`<p>Estimate (a) the mass of the air in a classroom, and (b) the number of times your heart beats in an 80-year lifetime. State your assumptions.</p>`,
   solution:String.raw`<p>(a) Room $\approx8\ \text{m}\times10\ \text{m}\times3\ \text{m}=240\ \text{m}^3$. Air density $1.2$ kg/m$^3$. Mass $\approx240\times1.2\approx290$ kg, so roughly $3\times10^2$ kg, the mass of several adults. (Surprising to most people. The reasoning only needs one memorized density.)</p>
<p>(b) Resting rate $\approx70$ per minute. $70\times60\times24\times365\times80\approx2.9\times10^9$, so about $3\times10^9$ beats. Since only the order of magnitude matters, answers from $10^9$ to $10^{10}$ are fine; using $3\times10^7$ s per year gives $70/60\times3\times10^7\times80\approx2.8\times10^9$, agreeing.</p>`},
  {id:"x4", title:"How good is the small-angle approximation?", problem:String.raw`<p>A pendulum is released from $\theta_0=10^\circ$. (a) Find the percentage error made in replacing $\sin\theta_0$ by $\theta_0$. (b) A refined calculation shows the period is longer than the small-angle period $T_0=2\pi\sqrt{\ell/g}$ by the factor $T\approx T_0\left(1+\theta_0^2/16\right)$. By how much, in percent?</p>`,
   solution:String.raw`<p>(a) $\theta_0=10\cdot\pi/180=0.17453$ rad. $\sin\theta_0=0.17365$. Fractional error $=(0.17453-0.17365)/0.17365=0.0051$, i.e. about 0.5%. (Estimate $\theta^2/6=0.0051$. &#10003;)</p>
<p>(b) $\theta_0^2/16=0.0305/16=0.0019$, so the true period is about 0.19% longer than $T_0$. For a $10^\circ$ release the small-angle result is excellent. Note the error in the period (0.19%) is smaller than the error in $\sin\theta$ because the equation of motion only needs to be accurate on average over the swing.</p>`}
  ],
  mcq:[
  {id:"q1", q:String.raw`<p>Which of the following expressions has the dimensions of energy (kg$\cdot$m$^2$/s$^2$)? Here $m$ is mass, $v$ speed, $a$ acceleration, $F$ force, $t$ time and $d$ distance.</p>`, choices:["$mv$","$ma$","$Fd$","$Ft^2/d$","$mv/t$"], a:2,
   why:String.raw`<p>$Fd$ is N$\cdot$m = kg$\cdot$m$^2$/s$^2$. $mv$ is kg$\cdot$m/s (momentum), $ma$ is a force, $Ft^2/d$ is kg (a mass), and $mv/t$ is kg$\cdot$m/s$^2$ (a force again). Note that the tempting $mv$ looks like $\tfrac12mv^2$ but is missing a factor of $v$.</p>`},
  {id:"q2", q:String.raw`<p>The speed of a wave on a stretched string depends on the tension $F_T$ (in newtons) and the mass per unit length $\mu$ (in kg/m). Which expression could correctly give the speed?</p>`, choices:["$F_T/\\mu$","$\\sqrt{F_T/\\mu}$","$\\sqrt{F_T\\mu}$","$F_T\\mu$","$F_T^2/\\mu$"], a:1,
   why:String.raw`<p>$F_T/\mu=(\text{kg}\,\text{m/s}^2)/(\text{kg/m})=\text{m}^2/\text{s}^2$, so its square root has units m/s. $F_T/\mu$ itself is a speed squared, and the other choices give units with leftover kg.</p>`},
  {id:"q3", q:String.raw`<p>A rectangle measures $3.2$ m by $4.56$ m. Its area, reported with an appropriate number of significant figures, is</p>`, choices:["$14.592\\ \\text{m}^2$","$14.59\\ \\text{m}^2$","$14.6\\ \\text{m}^2$","$15\\ \\text{m}^2$","$14\\ \\text{m}^2$"], a:3,
   why:String.raw`<p>The least precise input ($3.2$) has two significant figures, so the product keeps two: $14.592\to15$ m$^2$. Rounding down to 14 would be an arithmetic error, not a sig-fig choice.</p>`},
  {id:"q4", q:String.raw`<p>The number of seconds in one year is closest to</p>`, choices:["$3\\times10^{5}$","$3\\times10^{6}$","$3\\times10^{7}$","$3\\times10^{8}$","$3\\times10^{9}$"], a:2,
   why:String.raw`<p>$365\times24\times3600\approx3.15\times10^7$ s. A handy fact for estimates ("pi seconds is a nanocentury" is the same idea: $\pi\times10^7$ s per year).</p>`},
  {id:"q5", q:String.raw`<p>The vectors $\vec A=(2,-1,3)$ and $\vec B=(1,4,2)$ have a dot product of</p>`, choices:["$-4$","$0$","$4$","$12$","$(2,-4,6)$"], a:2,
   why:String.raw`<p>$2(1)+(-1)(4)+3(2)=2-4+6=4$. The dot product is a scalar, so the last choice (a vector) cannot be right.</p>`},
  {id:"q6", q:String.raw`<p>A proton moves in the $+x$ direction through a uniform magnetic field pointing in the $+y$ direction. The magnetic force $\vec F=q\vec v\times\vec B$ on the proton points in the</p>`, choices:["$+x$ direction","$-y$ direction","$+z$ direction","$-z$ direction","$+y$ direction"], a:2,
   why:String.raw`<p>$q>0$ and $\hat x\times\hat y=+\hat z$. The force must be perpendicular to both $\vec v$ and $\vec B$, so the $x$ and $y$ choices are out. For an electron ($q<0$) the answer would flip to $-z$.</p>`},
  {id:"q7", q:String.raw`<p>The magnitude of $\vec A$ is 3 and the magnitude of $\vec B$ is 4, and the angle between them is $30^\circ$. The magnitude of $\vec A\times\vec B$ is</p>`, choices:["$3.5$","$6$","$10.4$","$12$","$0$"], a:1,
   why:String.raw`<p>$AB\sin30^\circ=12(0.5)=6$. The value $10.4$ is $AB\cos30^\circ$, the magnitude of the dot product: the cross product uses sine.</p>`},
  {id:"q8", q:String.raw`<p>For $\theta=0.10$ rad, the quantity $1-\cos\theta$ is closest to</p>`, choices:["$0.10$","$0.05$","$0.01$","$0.005$","$0.0005$"], a:3,
   why:String.raw`<p>$1-\cos\theta\approx\theta^2/2=0.01/2=0.005$ (exact value $0.004996$). Setting $\cos\theta\approx1$ would give 0, which is the usual trap with this approximation.</p>`},
  {id:"q9", q:String.raw`<p>A surveyor measures an angle of $3.0^\circ$. The value of $\tan(3.0^\circ)$ is closest to</p>`, choices:["$0.0052$","$0.017$","$0.052$","$0.17$","$3.0$"], a:2,
   why:String.raw`<p>Convert to radians first: $3.0^\circ=0.0524$ rad, and $\tan\theta\approx\theta=0.0524$ (exact: $0.05241$). The choice 3.0 uses degrees as though they were radians.</p>`},
  {id:"q10", q:String.raw`<p>Torque and energy both have SI units of N$\cdot$m. Which statement is correct?</p>`, choices:["They are the same physical quantity","Torque is a vector from a cross product and energy is a scalar, so they are different quantities with the same dimensions","Torque is a scalar and energy is a vector","Torque has units of J/s","Energy comes from a cross product"], a:1,
   why:String.raw`<p>Matching dimensions does not make two quantities the same: $\vec\tau=\vec r\times\vec F$ is a vector, while work/energy comes from the scalar dot product $\vec F\cdot\Delta\vec r$. This is why units are a necessary but not a sufficient check.</p>`}
  ],
  frq:[
  {id:"f1", type:"Mathematical routines", title:"Magnetic force on a moving charge",
   prompt:String.raw`<p>A particle of charge $q=+2.0\ \mu\text{C}$ ($2.0\times10^{-6}$ C) moves with velocity $\vec v=(3.0\times10^3,\ 0,\ 4.0\times10^3)$ m/s through a uniform magnetic field $\vec B=(0,\ 0.50,\ 0)$ T. The magnetic force is $\vec F=q\,\vec v\times\vec B$. (The tesla has units $\text{T}=\text{kg}/(\text{C}\cdot\text{s})$.)</p>
<p>(a) Calculate $\vec v\times\vec B$ and the force $\vec F$ in component form.<br>
(b) Find the magnitude of $\vec F$ and check it using $F=qvB\sin\theta$, where $\theta$ is the angle between $\vec v$ and $\vec B$.<br>
(c) Calculate $\vec F\cdot\vec v$. Explain what this result means about the work done by the magnetic force and about the particle's speed.<br>
(d) A student claims the radius of the particle's circular path is $r=qB/(mv)$. Use dimensional analysis to show this is wrong, and show that $r=mv/(qB)$ passes the check.</p>`,
   pts:[
    {p:1,d:"Sets up the cross product components correctly (e.g. $v_yB_z-v_zB_y$, $v_zB_x-v_xB_z$, $v_xB_y-v_yB_x$)"},
    {p:1,d:"$\\vec v\\times\\vec B=(-2000,\\ 0,\\ 1500)$ m/s$\\cdot$T"},
    {p:1,d:"$\\vec F=(-4.0\\times10^{-3},\\ 0,\\ 3.0\\times10^{-3})$ N"},
    {p:1,d:"$|\\vec F|=5.0\\times10^{-3}$ N and verifies with $qvB\\sin\\theta$ ($v=5.0\\times10^3$ m/s, $\\sin\\theta=1$ since $\\vec v\\cdot\\vec B=0$)"},
    {p:1,d:"$\\vec F\\cdot\\vec v=0$ shown with numbers"},
    {p:1,d:"Explains: force is perpendicular to velocity, so zero work; therefore the kinetic energy and speed do not change (only direction changes)"},
    {p:1,d:"Shows $qB/(mv)$ has units $1/\\text{m}$ (or equivalent) and so is not a length"},
    {p:1,d:"Shows $mv/(qB)$ has units of meters"}],
   solution:String.raw`<p>(a) With $\vec v=(v_x,0,v_z)$ and $\vec B=(0,B,0)$:
$\vec v\times\vec B=(v_yB_z-v_zB_y,\ v_zB_x-v_xB_z,\ v_xB_y-v_yB_x)=(0-4.0\times10^3(0.5),\ 0-0,\ 3.0\times10^3(0.5)-0)=(-2000,\ 0,\ 1500)$.
Multiply by $q=2.0\times10^{-6}$ C: $\vec F=(-4.0\times10^{-3},\ 0,\ 3.0\times10^{-3})$ N.</p>
<p>(b) $F=\sqrt{(4.0)^2+(3.0)^2}\times10^{-3}=5.0\times10^{-3}$ N. Check: $v=\sqrt{3^2+4^2}\times10^3=5.0\times10^3$ m/s; $\vec v\cdot\vec B=0$ so $\theta=90^\circ$; $qvB\sin\theta=(2\times10^{-6})(5\times10^3)(0.5)(1)=5.0\times10^{-3}$ N. &#10003;</p>
<p>(c) $\vec F\cdot\vec v=(-4.0\times10^{-3})(3.0\times10^3)+0+(3.0\times10^{-3})(4.0\times10^3)=-12+12=0$ (in W). The force is perpendicular to the velocity at every instant, so the power $\vec F\cdot\vec v$ is zero: the force does no work, the kinetic energy and speed are constant, and the force only turns the velocity.</p>
<p>(d) $qB/(mv)$: units $\dfrac{\text{C}\cdot\text{kg}/(\text{C}\cdot\text{s})}{\text{kg}\cdot\text{m/s}}=\dfrac{\text{kg/s}}{\text{kg}\,\text{m/s}}=\dfrac1{\text{m}}$, not a length. $mv/(qB)$: $\dfrac{\text{kg}\cdot\text{m/s}}{\text{C}\cdot\text{kg}/(\text{C}\cdot\text{s})}=\dfrac{\text{kg}\,\text{m/s}}{\text{kg/s}}=\text{m}$. &#10003; (The student's expression is the reciprocal of the right one.)</p>`}
  ]
});
