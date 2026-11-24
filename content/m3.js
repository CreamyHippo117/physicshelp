PH.unit({
  id:"m3", course:"mech", order:50, hours:7,
  title:"Mechanics 3: Work, Energy and Power",
  blurb:"Newton's second law integrated over distance. Work, kinetic and potential energy, how to read a potential-energy graph, and power. Energy methods turn many hard force problems into one line of algebra.",
  needs:["m1","m2"],
  goals:[
    "Compute work as $W=\\int\\vec F\\cdot d\\vec r$, including variable forces, angles and spring forces",
    "Derive the work-energy theorem from Newton's second law and apply it to the net force",
    "Decide whether a force is conservative and get $U(x)$ from $F(x)$ and back with $F=-dU/dx$",
    "Read a $U(x)$ graph: force from slope, equilibria and their stability, turning points, allowed regions",
    "Use $\\Delta(K+U)=W_{nc}$ to handle friction and other non-conservative work",
    "Use $P=dW/dt=\\vec F\\cdot\\vec v$ for instantaneous and average power"
  ],
  lessons:[
  {id:"l1", title:"Work as a line integral",
   videos:[
    {title:"AP Physics C - Work",url:"https://www.youtube.com/watch?v=DZxXiaeiSEE",src:"YouTube (channel not verified)",note:"Work by constant and non-constant forces."}], html:String.raw`
<p><b>Energy</b> is a bookkeeping quantity: a number we can compute for a system that changes in a predictable way when forces act. The thing that changes it is <b>work</b>. Start with a force $\vec F$ pushing an object through a tiny displacement $d\vec r$. The work done by that force is the piece of the force that lies along the motion, times the distance:</p>
$$dW=\vec F\cdot d\vec r=F\,|d\vec r|\cos\theta$$
<p>Here $\vec A\cdot\vec B=AB\cos\theta=A_xB_x+A_yB_y+A_zB_z$ is the <b>dot product</b>: a scalar that measures how much of one vector points along the other. Adding up the tiny pieces along the whole path $C$ gives a line integral:</p>
$$W=\int_C\vec F\cdot d\vec r\qquad\text{which in one dimension is}\qquad W=\int_{x_1}^{x_2}F_x\,dx$$
<p>Work is a <b>scalar</b>, measured in joules: $1\ \text{J}=1\ \text{N\,m}$. Its sign tells you what the force does to the motion:</p>
<ul><li>$W>0$: the force has a component along the motion (it tends to speed the object up).</li>
<li>$W<0$: the force opposes the motion (it tends to slow it down).</li>
<li>$W=0$: the force is perpendicular to the motion, or the displacement is zero.</li></ul>
<div class="box key"><b>Perpendicular forces do no work.</b> A normal force on a sliding block, the tension on a swinging pendulum bob, and the gravitational pull on a planet in a perfectly circular orbit are each perpendicular to the velocity at every instant, so $\vec F\cdot d\vec r=0$ at every instant.</div>
<p><b>Constant force.</b> If $\vec F$ is constant the integral collapses: $W=\vec F\cdot\Delta\vec r=Fd\cos\theta$. Example: pulling a sled 10 m with a 30 N rope at $60^\circ$ above horizontal gives $30\cdot10\cdot\cos60^\circ=150$ J. Only the horizontal component, 15 N, does work.</p>
<p><b>Variable force.</b> When $F$ depends on position, the work is the <b>signed area under the $F_x$ versus $x$ graph</b>. Area above the axis counts positive, below counts negative (provided $x$ increases left to right).</p>
<svg class="fig" viewBox="0 0 340 200" width="340" role="img" aria-label="Graph of force F versus position x, a straight line falling from 4 N at x=0 through zero at x=2 m to minus 2 N at x=3 m; the triangle above the axis is shaded and labeled +4 J, the triangle below is labeled minus 1 J">
<line x1="40" y1="100" x2="320" y2="100" stroke="currentColor"/><line x1="40" y1="15" x2="40" y2="185" stroke="currentColor"/>
<polygon points="40,100 40,30 200,100" fill="currentColor" fill-opacity=".15"/>
<polygon points="200,100 280,100 280,135" fill="currentColor" fill-opacity=".35"/>
<line x1="40" y1="30" x2="280" y2="135" stroke="currentColor" stroke-width="2.5"/>
<text x="300" y="116">x (m)</text><text x="18" y="22">F (N)</text>
<text x="8" y="34">4</text><text x="198" y="116">2</text><text x="278" y="116">3</text>
<text x="85" y="80">area = +4 J</text><text x="205" y="150">area = −1 J</text><text x="120" y="195">net work = +3 J</text></svg>
<p><b>The spring.</b> An ideal spring exerts $F_x=-kx$ (Hooke's law), where $x$ is the stretch from the natural length and $k$ is the stiffness in N/m. The work done <i>by the spring</i> as the stretch goes from $x_1$ to $x_2$ is</p>
$$W_{spring}=\int_{x_1}^{x_2}(-kx)\,dx=-\tfrac12k\left(x_2^2-x_1^2\right)$$
<p>Stretching from $0$ to $x$ gives $-\tfrac12kx^2$ from the spring; a hand pulling slowly does the opposite, $+\tfrac12kx^2$.</p>
<div class="box trap"><b>Trap:</b> always ask <i>which force</i> and <i>on which object</i>. "The work done" is meaningless without that. On a lifted box, you do $+mgh$ and gravity does $-mgh$.</div>`},
  {id:"l2", title:"The work-energy theorem, kinetic energy and power",
   videos:[
    {title:"Deriving the Work-Energy Theorem using Calculus",url:"https://www.youtube.com/watch?v=2dqO4sy4Njg",src:"Flipping Physics",note:"Compare with the derivation in this lesson."},
    {title:"MIT 8.01 Lecture 11 (Lewin, 1999): work-energy theorem and conservation of energy",url:"https://videolectures.net/mit801f99_lewin_lec11",src:"Walter Lewin lectures",note:"Derives the theorem, then conserved mechanical energy with a wrecking-ball demo."}], html:String.raw`
<p>Here is where the definition of work earns its keep. Take a single particle of mass $m$ moving along $x$ under a net force $F_{net}$. Newton's second law says $F_{net}=m\,dv/dt$. The work done by the net force is</p>
$$W_{net}=\int F_{net}\,dx=\int m\frac{dv}{dt}\,dx=\int m\frac{dv}{dt}\,\Big(v\,dt\Big)=\int_{v_1}^{v_2}mv\,dv=\tfrac12mv_2^2-\tfrac12mv_1^2$$
<p>Step by step: along the path $dx=v\,dt$, so $F\,dx=m\,\frac{dv}{dt}\,v\,dt=mv\,dv$, and that is a perfect derivative. In three dimensions the same idea works with the dot product, because $d(\vec v\cdot\vec v)=2\vec v\cdot d\vec v$:</p>
$$\vec F_{net}\cdot d\vec r=m\frac{d\vec v}{dt}\cdot\vec v\,dt=m\,\vec v\cdot d\vec v=d\!\left(\tfrac12mv^2\right)$$
<p>Define the <b>kinetic energy</b> $K=\tfrac12mv^2$ (the energy of motion; a scalar that is never negative and does not depend on direction). Then</p>
<div class="box key"><b>Work-energy theorem:</b> $W_{net}=\Delta K=K_f-K_i$. The total work done by <i>all</i> forces on a particle equals its change in kinetic energy.</div>
<p>This is Newton's second law integrated over distance instead of time. It contains no new physics, but it is usually far quicker, because you never need the acceleration and it ignores the details of the path. Typical uses: find a final speed, a stopping distance, or an unknown force or work.</p>
<p><b>Consequences to remember.</b></p>
<ul><li>Doubling the speed quadruples $K$. With a constant braking force $f$, stopping distance is $d=K/f=mv^2/2f$, so it grows as $v^2$.</li>
<li>The theorem uses the <b>net</b> work. If several forces act, either sum all their works or use the net force. Do not use only the applied force and forget friction.</li>
<li>$K$ depends on the frame of reference through $v$, but $W_{net}=\Delta K$ holds in every inertial frame.</li></ul>
<p><b>Power</b> is the rate at which work is done (or energy transferred):</p>
$$P=\frac{dW}{dt}=\frac{\vec F\cdot d\vec r}{dt}=\vec F\cdot\vec v$$
<p>Unit: the watt, $1\ \text{W}=1\ \text{J/s}$. Average power is $\bar P=W/\Delta t$. Applying the work-energy theorem to the net force gives $dK/dt=\vec F_{net}\cdot\vec v$: the net power is the rate at which kinetic energy changes. For a vehicle with engine power $P$ at speed $v$, the driving force is $F=P/v$, which is why a car has less pulling force at high speed. At top speed the driving force equals the resistance, $P=f_{res}\,v_{max}$.</p>
<div class="box trap"><b>Trap:</b> $W_{net}=\Delta K$ is about the <i>net</i> force. Gravity doing $-mgh$ and a hand doing $+mgh$ on a box lifted at constant speed sum to zero, which is why $\Delta K=0$.</div>`},
  {id:"l3", title:"Conservative forces and potential energy",
   videos:[
    {title:"Conservative forces (Week 7, kinetic energy and work)",url:"https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-7-kinetic-energy-and-work/22-3-conservative-forces",src:"MIT OCW 8.01SC",note:"Path independence and splitting work into conservative and non-conservative parts."}], html:String.raw`
<p>A force is <b>conservative</b> if the work it does between two points depends only on the endpoints and not on the path taken. Equivalent test: the work around any closed loop is zero. Gravity near Earth and the ideal spring are conservative. Kinetic friction and drag are not: the longer the path, the more negative their work.</p>
<p>For a conservative force we can bank the work in a function of position, the <b>potential energy</b> $U$, defined by</p>
$$\Delta U=U(x_2)-U(x_1)=-W_{cons}=-\int_{x_1}^{x_2}F\,dx\qquad\Longleftrightarrow\qquad F=-\frac{dU}{dx}$$
<p>(The second form is the fundamental theorem of calculus applied to the first.) The minus sign says the force points in the direction $U$ decreases: <b>forces push downhill</b>. In three dimensions the same statement is written with the gradient, $\vec F=-\nabla U=-\left(\frac{\partial U}{\partial x},\frac{\partial U}{\partial y},\frac{\partial U}{\partial z}\right)$. For this course it is only notation: each component of the force is minus the corresponding partial derivative.</p>
<p>Only <i>differences</i> in $U$ matter: adding a constant to $U$ changes no force. So you may choose the zero of $U$ wherever convenient. Two key cases:</p>
$$\text{Gravity near the surface } (F_y=-mg):\ U=mgy\qquad\text{Ideal spring } (F_x=-kx):\ U=\tfrac12kx^2$$
<p>(For a preview of Mechanics 5: Newton's law of gravitation $F=-GMm/r^2$ pointing inward is $-dU/dr$ with $U=-GMm/r$.)</p>
<p><b>Conservation of mechanical energy.</b> Split the net work into conservative and non-conservative parts, $W_{net}=W_{cons}+W_{nc}$. The work-energy theorem gives $\Delta K=-\Delta U+W_{nc}$, so</p>
$$\Delta(K+U)=W_{nc}$$
<div class="box key">The <b>mechanical energy</b> $E=K+U$ stays constant when only conservative forces do work ($W_{nc}=0$). Non-conservative forces change $E$ by exactly their work. Kinetic friction does $W=-fd$, which removes $fd$ of mechanical energy; that energy reappears as thermal energy of the surfaces.</div>
<p><b>How to set up an energy problem.</b></p>
<ol><li>Pick two instants (initial and final) and write $K+U$ at each.</li>
<li>List any forces that do work and are <i>not</i> represented by a $U$ (friction, a motor, your hand).</li>
<li>Write $K_i+U_i+W_{nc}=K_f+U_f$ and solve.</li></ol>
<div class="box trap"><b>Trap: double counting.</b> If you include $mgh$ as a potential energy, do <i>not</i> also count the work done by gravity. Use one bookkeeping method or the other. Also, normal forces and tensions that stay perpendicular to the motion contribute nothing to $W_{nc}$.</div>`},
  {id:"l4", title:"Reading potential-energy graphs",
   videos:[
    {title:"Potential Energy Graphs and Stability",url:"https://www.youtube.com/watch?v=hMPJkdxuAMU",src:"YouTube (channel not verified)",note:"Stable, unstable and neutral equilibrium on U(x) graphs."}], html:String.raw`
<p>A graph of $U(x)$ for one-dimensional motion contains the whole qualitative story. Learn to read it in four ways.</p>
<p><b>1. Force from slope.</b> $F=-dU/dx$. Where the graph slopes up to the right the force points left ($-x$); where it slopes down the force points right. Steeper slope means larger force. A horizontal tangent means zero force.</p>
<p><b>2. Equilibrium.</b> At $dU/dx=0$ the net force is zero. Classify it by the curvature:</p>
<ul><li><b>Stable</b>: a local minimum ($U''>0$). Nudged away, the force pushes it back.</li>
<li><b>Unstable</b>: a local maximum ($U''<0$). Nudged away, the force pushes it farther.</li>
<li><b>Neutral</b>: flat region. No force anywhere nearby.</li></ul>
<p><b>3. Energy and turning points.</b> If only conservative forces act, the total energy $E=K+U$ is a constant: draw it as a horizontal line. The kinetic energy is the vertical gap between that line and the curve, $K=E-U\ge0$. So the particle is confined to the <b>allowed region</b> where $U\le E$. At a <b>turning point</b> $U=E$, so $K=0$ and the particle momentarily stops and reverses. The force there is generally <i>not</i> zero.</p>
<svg class="fig" viewBox="0 0 440 240" width="440" role="img" aria-label="A potential energy curve U versus x: a steep wall at the left, a stable minimum, a hill (unstable maximum), then a flat plateau on the right. A dashed low energy line crosses the well at two turning points; a dashed high energy line is above the hill and touches the curve at only one turning point on the left.">
<line x1="50" y1="215" x2="420" y2="215" stroke="currentColor"/><line x1="50" y1="15" x2="50" y2="215" stroke="currentColor"/>
<polyline fill="none" stroke="currentColor" stroke-width="2.5" points="50.0,36.7 51.8,37.1 53.5,38.4 55.3,40.4 57.0,43.1 58.8,46.4 60.6,50.2 62.3,54.5 64.1,59.1 65.8,64.1 67.6,69.4 69.3,74.7 71.1,80.2 72.9,85.8 74.6,91.2 76.4,96.6 78.1,101.7 79.9,106.6 81.7,111.1 83.4,115.2 85.2,118.9 86.9,122.3 88.7,125.8 90.5,129.2 92.2,132.7 94.0,136.1 95.7,139.5 97.5,142.9 99.2,146.2 101.0,149.4 102.8,152.6 104.5,155.7 106.3,158.6 108.0,161.5 109.8,164.2 111.6,166.8 113.3,169.3 115.1,171.5 116.8,173.7 118.6,175.6 120.4,177.3 122.1,179.0 123.9,180.7 125.6,182.4 127.4,184.1 129.1,185.7 130.9,187.3 132.7,188.9 134.4,190.4 136.2,191.8 137.9,193.2 139.7,194.5 141.5,195.7 143.2,196.7 145.0,197.7 146.7,198.5 148.5,199.2 150.3,199.7 152.0,200.1 153.8,200.3 155.5,200.4 157.3,200.2 159.0,199.9 160.8,199.4 162.6,198.8 164.3,198.0 166.1,197.1 167.8,196.0 169.6,194.9 171.4,193.6 173.1,192.3 174.9,190.8 176.6,189.4 178.4,187.8 180.2,186.2 181.9,184.6 183.7,182.9 185.4,181.3 187.2,179.6 188.9,178.0 190.7,176.3 192.5,174.5 194.2,172.3 196.0,170.0 197.7,167.5 199.5,164.8 201.3,162.0 203.0,159.1 204.8,156.1 206.5,153.0 208.3,150.0 210.1,146.9 211.8,143.8 213.6,140.8 215.3,137.9 217.1,135.0 218.8,132.4 220.6,129.8 222.4,127.5 224.1,125.4 225.9,123.4 227.6,121.5 229.4,119.5 231.2,117.5 232.9,115.5 234.7,113.5 236.4,111.5 238.2,109.6 239.9,107.7 241.7,105.9 243.5,104.1 245.2,102.5 247.0,101.0 248.7,99.6 250.5,98.4 252.3,97.4 254.0,96.5 255.8,95.8 257.5,95.4 259.3,95.2 261.1,95.2 262.8,95.5 264.6,96.2 266.3,97.0 268.1,98.1 269.8,99.4 271.6,100.9 273.4,102.6 275.1,104.3 276.9,106.1 278.6,108.1 280.4,110.0 282.2,112.0 283.9,113.9 285.7,115.9 287.4,117.7 289.2,119.5 291.0,121.2 292.7,122.7 294.5,124.0 296.2,125.2 298.0,126.5 299.7,127.7 301.5,129.0 303.3,130.3 305.0,131.6 306.8,132.9 308.5,134.3 310.3,135.6 312.1,136.9 313.8,138.2 315.6,139.5 317.3,140.7 319.1,142.0 320.9,143.2 322.6,144.3 324.4,145.5 326.1,146.5 327.9,147.5 329.6,148.5 331.4,149.4 333.2,150.2 334.9,150.9 336.7,151.6 338.4,152.2 340.2,152.7 342.0,153.1 343.7,153.4 345.5,153.5 347.2,153.6 349.0,153.6 350.8,153.6 352.5,153.6 354.3,153.6 356.0,153.6 357.8,153.6 359.5,153.6 361.3,153.6 363.1,153.6 364.8,153.6 366.6,153.6 368.3,153.6 370.1,153.6 371.9,153.6 373.6,153.6 375.4,153.6 377.1,153.6 378.9,153.6 380.7,153.6 382.4,153.6 384.2,153.6 385.9,153.6 387.7,153.6 389.4,153.6 391.2,153.6 393.0,153.6 394.7,153.6 396.5,153.6 398.2,153.6 400.0,153.6"/>
<line x1="50" y1="171" x2="410" y2="171" stroke="currentColor" stroke-dasharray="5 4"/>
<line x1="50" y1="78" x2="410" y2="78" stroke="currentColor" stroke-dasharray="5 4"/>
<circle cx="115" cy="171" r="4" fill="currentColor"/><circle cx="195" cy="171" r="4" fill="currentColor"/><circle cx="70" cy="78" r="4" fill="currentColor"/>
<text x="30" y="22">U</text><text x="425" y="219">x</text>
<text x="352" y="165">E₁</text><text x="352" y="72">E₂</text>
<text x="115" y="190" text-anchor="middle">turning pts</text>
<text x="155" y="232" text-anchor="middle">stable</text><text x="260" y="88" text-anchor="middle">unstable</text><text x="368" y="146" text-anchor="middle">neutral</text>
<text x="86" y="70">one turning point</text></svg>
<p>In the figure, a particle with energy $E_1$ is <b>bound</b>: it oscillates between its two turning points, fastest at the bottom of the well (where $K=E-U$ is largest). A particle with energy $E_2$ is above the hill, so it can travel out to large $x$ ("unbound"), bounces at the left wall at its single turning point, and never returns. The hill is a <b>barrier</b>: the particle at $E_1$ would need at least the hilltop value of $U$ to cross it.</p>
<p><b>4. Small oscillations.</b> Near a stable minimum $x_0$, Taylor-expand: $U(x)\approx U(x_0)+\tfrac12U''(x_0)(x-x_0)^2$ (the linear term vanishes). That is exactly a spring potential with effective stiffness $k_{eff}=U''(x_0)$, so small oscillations are simple harmonic with angular frequency $\omega=\sqrt{U''(x_0)/m}$.</p>
<div class="box trap"><b>Trap:</b> the horizontal axis is <i>position</i>, not height, and the curve is not the path of the particle. A particle in a deep well on the graph is not "lower down" anywhere; it is simply in a region where $U$ is small and so its kinetic energy is large. And at a turning point the speed is zero but the acceleration is not (unless it is also an equilibrium point).</div>`}
  ],
  examples:[
  {id:"x1", title:"Work: dot product and variable force", problem:String.raw`<p>(a) A constant force $\vec F=(3\hat\imath+4\hat\jmath)$ N acts on a particle that moves in a straight line from the origin to the point $(2,-1)$ m. Find the work done. What displacement $(4,y)$ would make the work zero?</p>
<p>(b) A force $F_x=3x^2$ (N, with $x$ in m) acts along $x$ as the particle moves from $x=1$ m to $x=3$ m. Find the work.</p>`,
   solution:String.raw`<p>(a) $W=\vec F\cdot\Delta\vec r=(3)(2)+(4)(-1)=2$ J. The work is zero when $\vec F\cdot\Delta\vec r=0$: $3(4)+4y=0\Rightarrow y=-3$ m, a displacement perpendicular to $\vec F$.</p>
<p>(b) $W=\int_1^3 3x^2\,dx=\left[x^3\right]_1^3=27-1=26$ J.</p>`},
  {id:"x2", title:"Slide, then stop on rough ground", problem:String.raw`<p>A 2 kg block is released from rest at the top of a frictionless curved ramp, 1.8 m above a horizontal floor. At the bottom it slides onto a rough part of the floor with $\mu_k=0.3$. Take $g=10$ m/s². Find its speed at the bottom and the distance it slides on the rough floor before stopping.</p>`,
   solution:String.raw`<p>The ramp is frictionless and the normal force is perpendicular to the motion, so $E$ is conserved: $mgh=\tfrac12mv^2\Rightarrow v=\sqrt{2gh}=\sqrt{2(10)(1.8)}=6$ m/s. (The shape of the ramp does not matter.)</p>
<p>On the floor friction is $f=\mu_kmg=0.3(2)(10)=6$ N, and it is the only force doing work: $W_{net}=-fd=0-\tfrac12mv^2=-36$ J, so $d=36/6=6$ m.</p>
<p>Shortcut: $mgh=\mu_kmg\,d$ gives $d=h/\mu_k=1.8/0.3=6$ m. Mass cancels.</p>`},
  {id:"x3", title:"Dropping a mass onto a spring", problem:String.raw`<p>A 0.5 kg mass is released from rest 0.40 m above the free end of a light vertical spring ($k=200$ N/m) fixed to the floor. Find the maximum compression of the spring. Use $g=10$ m/s².</p>`,
   solution:String.raw`<p>Take the instants: release (at rest) and the lowest point (at rest). Both have $K=0$, and no non-conservative forces act, so $\Delta U_{grav}+\Delta U_{spring}=0$. The mass falls a total height $0.40+x$ while the spring compresses by $x$:</p>
$$mg(0.40+x)=\tfrac12kx^2\ \Rightarrow\ 5(0.40+x)=100x^2\ \Rightarrow\ 100x^2-5x-2=0$$
<p>$x=\dfrac{5+\sqrt{25+800}}{200}\approx0.169$ m. (Reject the negative root.) At the bottom the spring force is $kx\approx33.7$ N, far more than the 5 N weight, so the mass is pushed back up.</p>
<p class="mut">Common slip: using only the 0.40 m fall. The mass keeps dropping while it compresses the spring.</p>`},
  {id:"x4", title:"Analyzing a potential-energy function", problem:String.raw`<p>A 1.0 kg particle moves along $x$ in the potential $U(x)=\tfrac14x^4-2x^2$ (joules, $x$ in meters). It is released from rest at $x=1.0$ m. (a) Find the equilibrium positions and classify them. (b) Find the force at release. (c) Find the turning points. (d) Find its speed at $x=2$ m. (e) Find the period of small oscillations about $x=2$ m.</p>`,
   solution:String.raw`<p>(a) $\dfrac{dU}{dx}=x^3-4x=x(x-2)(x+2)=0\Rightarrow x=0,\pm2$. $U''=3x^2-4$: at $x=0$, $U''=-4<0$ (unstable, a local max with $U=0$); at $x=\pm2$, $U''=8>0$ (stable, $U=4-8=-4$ J).</p>
<p>(b) $F=-dU/dx=-(1-4)=+3$ N, toward $+x$ (down the slope toward the well at $x=2$).</p>
<p>(c) $E=U(1)=\tfrac14-2=-1.75$ J. Solve $U=E$: $\tfrac14x^4-2x^2+1.75=0\Rightarrow x^4-8x^2+7=0\Rightarrow(x^2-1)(x^2-7)=0$. Turning points at $x=\pm1,\pm\sqrt7$. Starting at $x=1$ the particle moves between $x=1$ and $x=\sqrt7\approx2.65$ m. It can never reach $x=0$ because $U(0)=0>E$.</p>
<p>(d) $K=E-U(2)=-1.75-(-4)=2.25$ J, so $v=\sqrt{2K/m}=\sqrt{4.5}\approx2.12$ m/s.</p>
<p>(e) $k_{eff}=U''(2)=8$ N/m, $\omega=\sqrt{8/1}\approx2.83$ rad/s, $T=2\pi/\omega\approx2.22$ s (valid for small amplitude only; this particle's swing, from 1 to 2.65 m, is not small, so the true period differs).</p>`}
  ],
  mcq:[
  {id:"q1", q:String.raw`<p>A rope pulls a crate 10 m along a level floor with a constant tension of 20 N, directed $60^\circ$ above the horizontal. The work done by the rope is</p>`, choices:["50 J","87 J","100 J","173 J","200 J"], a:2,
   why:String.raw`<p>$W=Fd\cos\theta=(20)(10)\cos60^\circ=100$ J. Using $\cos30^\circ$ (87 J) or $\sin60^\circ$ (173 J) uses the wrong component, and 200 J ignores the angle.</p>`},
  {id:"q2", q:String.raw`<p>A force $F_x=3x^2$ (SI) acts on a particle as it moves from $x=0$ to $x=2$ m. The work done by the force is</p>`, choices:["6 J","8 J","12 J","16 J","24 J"], a:1,
   why:String.raw`<p>$W=\int_0^2 3x^2dx=x^3\big|_0^2=8$ J. Multiplying the final force (12 N) by the distance (2 m) gives 24 J, which wrongly treats the force as constant; the force grows from 0 to 12 N.</p>`},
  {id:"q3", q:String.raw`<p>A spring ($k=200$ N/m) is stretched from $x=0.10$ m to $x=0.30$ m beyond its natural length. The work done <i>by the spring</i> during this stretch is</p>`, choices:["$-8$ J","$+8$ J","$-4$ J","$-9$ J","$-40$ J"], a:0,
   why:String.raw`<p>$W=-\tfrac12k(x_2^2-x_1^2)=-100(0.09-0.01)=-8$ J. It is negative because the spring pulls back while the stretch increases. $+8$ J would be the work done by the hand. $-4$ J results from using $\tfrac12k(\Delta x)^2$, which is not correct.</p>`},
  {id:"q4", q:String.raw`<p>A 2 kg ball is thrown straight up, rises 5 m, and falls back to the launch point. Taking $g=10$ m/s² and neglecting air resistance, the total work done by gravity during the whole trip is</p>`, choices:["0","$-100$ J","$+100$ J","$-200$ J","$+200$ J"], a:0,
   why:String.raw`<p>Going up gravity does $-mgh=-100$ J; coming down it does $+100$ J. The total is zero because gravity is conservative and the displacement is zero. ($-100$ J is only the upward half.)</p>`},
  {id:"q5", q:String.raw`<p>A 2 kg object moving at 3 m/s is acted on by forces whose total (net) work is $+16$ J. Its final speed is</p>`, choices:["4 m/s","5 m/s","6 m/s","7 m/s","8 m/s"], a:1,
   why:String.raw`<p>$K_i=\tfrac12(2)(3)^2=9$ J, $K_f=9+16=25$ J, so $v=\sqrt{2K_f/m}=5$ m/s. Energies add, speeds do not, because $K\propto v^2$.</p>`},
  {id:"q6", q:String.raw`<p>On a dry road a car traveling at speed $v$ brakes with a constant friction force and skids a distance $d$ to a stop. If the same car were traveling at $2v$, the skid distance would be</p>`, choices:["$d$","$\\sqrt2\\,d$","$2d$","$4d$","$8d$"], a:3,
   why:String.raw`<p>$fd=\tfrac12mv^2$, so $d\propto v^2$. Doubling the speed multiplies $K$ by 4 and so multiplies the distance by 4. Choosing $2d$ wrongly treats stopping distance as proportional to speed.</p>`},
  {id:"q7", q:String.raw`<p>A particle has potential energy $U(x)=3x^2-2x$ (SI). The force on it at $x=1$ m is</p>`, choices:["$-4$ N","$+4$ N","$+1$ N","$-1$ N","$+2$ N"], a:0,
   why:String.raw`<p>$F=-dU/dx=-(6x-2)$, which at $x=1$ is $-4$ N. $+4$ N forgets the minus sign, and $U(1)=1$ J is an energy, not a force.</p>`},
  {id:"q8", q:String.raw`<p>The graph shows the potential energy of a particle versus position. At which labeled point is the force on the particle directed toward $+x$ with the greatest magnitude?</p>
<svg class="fig" viewBox="0 0 340 220" width="340" role="img" aria-label="Potential energy U versus x, a cosine-shaped curve starting at a maximum at point P, falling through point Q on its steepest downhill part, reaching a minimum at point R, rising through point S on its steepest uphill part, and ending at a maximum at point T">
<line x1="40" y1="120" x2="320" y2="120" stroke="currentColor"/><line x1="40" y1="15" x2="40" y2="205" stroke="currentColor"/>
<polyline fill="none" stroke="currentColor" stroke-width="2.5" points="40.0,50.0 42.2,50.1 44.4,50.4 46.6,50.9 48.7,51.6 50.9,52.4 53.1,53.5 55.3,54.7 57.5,56.2 59.7,57.8 61.8,59.5 64.0,61.5 66.2,63.6 68.4,65.9 70.6,68.3 72.8,70.8 75.0,73.5 77.1,76.4 79.3,79.3 81.5,82.4 83.7,85.5 85.9,88.8 88.1,92.1 90.3,95.6 92.4,99.1 94.6,102.6 96.8,106.2 99.0,109.9 101.2,113.5 103.4,117.2 105.5,120.9 107.7,124.6 109.9,128.3 112.1,132.0 114.3,135.6 116.5,139.2 118.7,142.7 120.8,146.1 123.0,149.5 125.2,152.8 127.4,156.1 129.6,159.2 131.8,162.2 133.9,165.1 136.1,167.8 138.3,170.5 140.5,173.0 142.7,175.3 144.9,177.5 147.1,179.5 149.2,181.4 151.4,183.1 153.6,184.6 155.8,185.9 158.0,187.1 160.2,188.0 162.4,188.8 164.5,189.4 166.7,189.8 168.9,190.0 171.1,190.0 173.3,189.8 175.5,189.4 177.6,188.8 179.8,188.0 182.0,187.1 184.2,185.9 186.4,184.6 188.6,183.1 190.8,181.4 192.9,179.5 195.1,177.5 197.3,175.3 199.5,173.0 201.7,170.5 203.9,167.8 206.1,165.1 208.2,162.2 210.4,159.2 212.6,156.1 214.8,152.8 217.0,149.5 219.2,146.1 221.3,142.7 223.5,139.2 225.7,135.6 227.9,132.0 230.1,128.3 232.3,124.6 234.5,120.9 236.6,117.2 238.8,113.5 241.0,109.9 243.2,106.2 245.4,102.6 247.6,99.1 249.7,95.6 251.9,92.1 254.1,88.8 256.3,85.5 258.5,82.4 260.7,79.3 262.9,76.4 265.0,73.5 267.2,70.8 269.4,68.3 271.6,65.9 273.8,63.6 276.0,61.5 278.2,59.5 280.3,57.8 282.5,56.2 284.7,54.7 286.9,53.5 289.1,52.4 291.3,51.6 293.4,50.9 295.6,50.4 297.8,50.1 300.0,50.0"/>
<g fill="currentColor"><circle cx="40" cy="50" r="4"/><circle cx="105" cy="120" r="4"/><circle cx="170" cy="190" r="4"/><circle cx="235" cy="120" r="4"/><circle cx="300" cy="50" r="4"/></g>
<text x="48" y="48">P</text><text x="112" y="112">Q</text><text x="176" y="186">R</text><text x="242" y="112">S</text><text x="288" y="42">T</text>
<text x="22" y="20">U</text><text x="325" y="124">x</text></svg>`, choices:["P","Q","R","S","T"], a:1,
   why:String.raw`<p>$F=-dU/dx$ points toward $+x$ where the slope is negative, and its magnitude is greatest where the slope is steepest: at the middle of the downhill section. The tempting alternative is the middle of the uphill section, where the slope is equally steep but the force points toward $-x$. The maxima and the minimum have zero slope, so zero force.</p>`},
  {id:"q9", q:String.raw`<p>A particle moves in one dimension under a conservative force with potential energy $U(x)$ and total energy $E$. At a turning point of its motion, which statement must be true?</p>`, choices:["Its kinetic energy is zero","The net force on it is zero","Its acceleration is zero","Its potential energy is a minimum","Its total energy is zero"], a:0,
   why:String.raw`<p>A turning point is where $U(x)=E$, so $K=E-U=0$ and the speed is zero. The force there is $-dU/dx$, which is usually not zero (that is why it turns around). Zero speed does not imply zero force or equilibrium.</p>`},
  {id:"q10", q:String.raw`<p>A pendulum bob on a 2.0 m string is released from rest with the string at $60^\circ$ from the vertical. Neglecting air resistance, with $g=10$ m/s², its speed at the lowest point is closest to</p>`, choices:["2.2 m/s","3.2 m/s","4.5 m/s","5.5 m/s","6.3 m/s"], a:2,
   why:String.raw`<p>The bob falls a height $h=L(1-\cos60^\circ)=1.0$ m (the tension does no work). $v=\sqrt{2gh}=\sqrt{20}\approx4.5$ m/s. The value 6.3 m/s results from dropping the full 2 m string length.</p>`},
  {id:"q11", q:String.raw`<p>A 1500 kg car's engine delivers a constant 60 kW to the wheels. When the car is moving at 20 m/s along a level road, the total resistive force is 1000 N. Its acceleration at that instant is</p>`, choices:["0.67 m/s²","1.0 m/s²","1.3 m/s²","2.0 m/s²","2.7 m/s²"], a:2,
   why:String.raw`<p>Driving force $F=P/v=60000/20=3000$ N. Net force $=3000-1000=2000$ N, $a=2000/1500\approx1.3$ m/s². The answer 2.0 m/s² ignores the resistance.</p>`},
  {id:"q12", q:String.raw`<p>A 2 kg block slides from rest down a rough curved track, dropping 3.0 m in height, and reaches the bottom with a speed of 6 m/s. Taking $g=10$ m/s², the energy converted to thermal energy by friction is</p>`, choices:["12 J","24 J","36 J","60 J","96 J"], a:1,
   why:String.raw`<p>$\Delta(K+U)=W_{nc}$: $\tfrac12(2)(6^2)-(2)(10)(3)=36-60=-24$ J, so friction removed 24 J of mechanical energy. The 36 J is the final kinetic energy and 60 J is the total energy available, neither of which is the loss.</p>`}
  ],
  frq:[
  {id:"f1", type:"Qualitative/quantitative translation", title:"A particle in a cubic potential",
   prompt:String.raw`<p>A particle of mass $m=1.0$ kg moves along the $x$-axis. Its potential energy is $U(x)=x(x-3)^2$, with $U$ in joules and $x$ in meters, graphed below. No other forces act.</p>
<svg class="fig" viewBox="0 0 400 230" width="400" role="img" aria-label="Graph of U of x equals x times (x minus 3) squared: zero at x=0, rising to a maximum of 4 joules at x=1, falling to zero at x=3, then rising again to 4 joules at x=4">
<line x1="50" y1="150" x2="390" y2="150" stroke="currentColor"/><line x1="74.5" y1="20" x2="74.5" y2="205" stroke="currentColor"/>
<polyline fill="none" stroke="currentColor" stroke-width="2.5" points="60.0,191.0 62.1,184.3 64.3,177.8 66.4,171.6 68.6,165.6 70.7,159.8 72.9,154.2 75.0,148.8 77.2,143.6 79.3,138.7 81.5,133.9 83.6,129.4 85.8,125.0 87.9,120.8 90.1,116.9 92.2,113.1 94.4,109.5 96.5,106.0 98.7,102.8 100.8,99.7 103.0,96.8 105.1,94.1 107.2,91.5 109.4,89.1 111.5,86.9 113.7,84.8 115.8,82.8 118.0,81.0 120.1,79.4 122.3,77.9 124.4,76.5 126.6,75.3 128.7,74.2 130.9,73.3 133.0,72.5 135.2,71.8 137.3,71.2 139.5,70.7 141.6,70.4 143.8,70.1 145.9,70.0 148.1,70.0 150.2,70.1 152.3,70.3 154.5,70.6 156.6,71.0 158.8,71.4 160.9,72.0 163.1,72.6 165.2,73.4 167.4,74.2 169.5,75.0 171.7,76.0 173.8,77.0 176.0,78.1 178.1,79.3 180.3,80.5 182.4,81.8 184.6,83.1 186.7,84.5 188.9,85.9 191.0,87.3 193.2,88.9 195.3,90.4 197.4,92.0 199.6,93.6 201.7,95.3 203.9,96.9 206.0,98.6 208.2,100.3 210.3,102.1 212.5,103.8 214.6,105.6 216.8,107.3 218.9,109.1 221.1,110.9 223.2,112.7 225.4,114.4 227.5,116.2 229.7,117.9 231.8,119.7 234.0,121.4 236.1,123.1 238.3,124.7 240.4,126.4 242.6,128.0 244.7,129.6 246.8,131.1 249.0,132.7 251.1,134.1 253.3,135.5 255.4,136.9 257.6,138.2 259.7,139.5 261.9,140.7 264.0,141.9 266.2,143.0 268.3,144.0 270.5,145.0 272.6,145.8 274.8,146.6 276.9,147.4 279.1,148.0 281.2,148.6 283.4,149.0 285.5,149.4 287.7,149.7 289.8,149.9 291.9,150.0 294.1,150.0 296.2,149.9 298.4,149.6 300.5,149.3 302.7,148.8 304.8,148.2 307.0,147.5 309.1,146.7 311.3,145.8 313.4,144.7 315.6,143.5 317.7,142.1 319.9,140.6 322.0,139.0 324.2,137.2 326.3,135.2 328.5,133.1 330.6,130.9 332.8,128.5 334.9,125.9 337.0,123.2 339.2,120.3 341.3,117.2 343.5,114.0 345.6,110.5 347.8,106.9 349.9,103.1 352.1,99.2 354.2,95.0 356.4,90.6 358.5,86.1 360.7,81.3 362.8,76.4 365.0,71.2 367.1,65.8 369.3,60.2 371.4,54.4 373.6,48.4 375.7,42.2 377.9,35.7 380.0,29.0"/>
<g stroke="currentColor"><line x1="147" y1="146" x2="147" y2="154"/><line x1="220" y1="146" x2="220" y2="154"/><line x1="293" y1="146" x2="293" y2="154"/><line x1="365" y1="146" x2="365" y2="154"/>
<line x1="70" y1="110" x2="79" y2="110"/><line x1="70" y1="70" x2="79" y2="70"/></g>
<text x="145" y="168">1</text><text x="218" y="168">2</text><text x="291" y="168">3</text><text x="363" y="168">4</text><text x="378" y="168">x (m)</text>
<text x="52" y="114">2</text><text x="52" y="74">4</text><text x="80" y="26">U (J)</text></svg>
<p>(a) Find all equilibrium positions and state whether each is stable or unstable. Justify using the graph or calculus.<br>
(b) Find the force on the particle at $x=2.0$ m (magnitude and direction).<br>
(c) At $x=3.0$ m the particle has a speed of 2.0 m/s. Calculate its total energy, and find the two turning points of the region of motion that contains $x=3$ m. (Hint: one of them is at an integer position.)<br>
(d) Find the particle's speed at $x=3.5$ m.<br>
(e) Describe the subsequent motion in words, and explain why the particle can never reach $x=0.5$ m.<br>
(f) What is the minimum speed at $x=3.0$ m that would allow the particle to reach $x=0.5$ m?</p>`,
   pts:[
    {p:1,d:"Sets $dU/dx=3(x-1)(x-3)=0$: equilibria at $x=1$ m and $x=3$ m"},
    {p:1,d:"Classifies: $x=1$ is a local maximum (unstable, $U''<0$); $x=3$ is a local minimum (stable, $U''>0$)"},
    {p:1,d:"Uses $F=-dU/dx$ with $dU/dx=3x^2-12x+9$"},
    {p:1,d:"$F=+3$ N, directed toward $+x$ (the slope at $x=2$ is $-3$ J/m)"},
    {p:1,d:"Total energy $E=K+U=\\tfrac12(1)(2)^2+0=2$ J"},
    {p:1,d:"Sets $U(x)=E=2$ J to find turning points ($x^3-6x^2+9x-2=0$)"},
    {p:1,d:"Turning points at $x=2$ m and $x=2+\\sqrt3\\approx3.73$ m"},
    {p:1,d:"$K=E-U(3.5)=2-0.875=1.125$ J, so $v=1.5$ m/s"},
    {p:1,d:"Qualitative: oscillates back and forth between 2 and 3.73 m, fastest at $x=3$ m, slowest at the turning points"},
    {p:1,d:"Explains: reaching $x=0.5$ requires crossing the hump at $x=1$ where $U=4$ J exceeds $E=2$ J, which would need negative kinetic energy"},
    {p:1,d:"Requires $E\\ge U_{max}=4$ J at the barrier (so $K(3)\\ge4$ J)"},
    {p:1,d:"$v_{min}=\\sqrt{2(4)/1}=2\\sqrt2\\approx2.83$ m/s"}],
   solution:String.raw`<p>(a) $dU/dx=3x^2-12x+9=3(x-1)(x-3)$, so equilibria at $x=1$ and $x=3$ m. $U''=6x-12$: $U''(1)=-6<0$ so $x=1$ is a local maximum, <b>unstable</b>; $U''(3)=+6>0$ so $x=3$ is a local minimum, <b>stable</b>. (Same from the graph: top of a hill, bottom of a valley.)</p>
<p>(b) $F=-dU/dx=-(3(2)^2-12(2)+9)=-(12-24+9)=+3$ N, toward $+x$. The graph slopes downward to the right at $x=2$, so the force points right.</p>
<p>(c) $E=\tfrac12mv^2+U(3)=\tfrac12(1)(4)+0=2$ J. Turning points satisfy $x(x-3)^2=2\Rightarrow x^3-6x^2+9x-2=0$. Try $x=2$: $8-24+18-2=0$. Factor: $(x-2)(x^2-4x+1)=0$, giving $x=2$ and $x=2\pm\sqrt3$. The other roots are $2\pm\sqrt3$, that is $\approx3.73$ m and $\approx0.27$ m; the 0.27 m root lies on the far side of the barrier at $x=1$ and does not bound this region. The turning points of the region containing $x=3$ are $x=2$ m and $x\approx3.73$ m.</p>
<p>(d) $U(3.5)=3.5(0.5)^2=0.875$ J. $K=2-0.875=1.125$ J, so $v=\sqrt{2(1.125)/1}=1.5$ m/s.</p>
<p>(e) The particle oscillates between $x=2$ and $x\approx3.73$ m, fastest at the bottom of the well ($x=3$ m) where $K$ is largest, and momentarily at rest at each turning point where the force (restoring, toward $x=3$) turns it around. Reaching $x=0.5$ requires passing $x=1$, where $U=4$ J. Since $E=2$ J, there $K=E-U=-2$ J, impossible, so that region is forbidden.</p>
<p>(f) To cross the barrier the particle needs $E\ge U(1)=4$ J (just reaching the top at $x=1$, after which it rolls down to the other side). At $x=3$, $U=0$, so $K\ge4$ J: $\tfrac12(1)v^2=4\Rightarrow v=\sqrt8=2\sqrt2\approx2.83$ m/s.</p>`},
  {id:"f2", type:"Mathematical routines", title:"A block pushed by a position-dependent force",
   prompt:String.raw`<p>A 2.0 kg block rests at $x=0$ on a horizontal surface. The coefficient of kinetic friction is $\mu_k=0.10$. A horizontal force $F(x)=12-3x$ (newtons, $x$ in meters) acts in the $+x$ direction for $0\le x\le4.0$ m. For $x>4.0$ m the force is zero. Use $g=10$ m/s².</p>
<p>(a) Calculate the work done by $F$ as the block moves from $x=0$ to $x=4.0$ m.<br>
(b) Calculate the speed of the block at $x=4.0$ m.<br>
(c) At what position in $0\le x\le4$ m is the block's speed greatest? Explain why this is not at $x=0$, where the applied force is largest.<br>
(d) How far beyond $x=4.0$ m does the block slide before it stops?<br>
(e) Calculate the rate at which $F$ does work (the power delivered by $F$) at the instant the block passes $x=2.0$ m.</p>`,
   pts:[
    {p:1,d:"Sets up $W=\\int_0^4(12-3x)\\,dx$ (or area under the $F$-$x$ line)"},
    {p:1,d:"$W_F=24$ J"},
    {p:1,d:"Applies $W_{net}=\\Delta K$ with friction work $-fd=-(2)(4)=-8$ J, using $f=\\mu_kmg=2$ N"},
    {p:1,d:"$\\tfrac12(2)v^2=16$ J, so $v=4$ m/s"},
    {p:1,d:"Speed is greatest where $dK/dx=F_{net}=0$: $12-3x-2=0$"},
    {p:1,d:"$x=10/3\\approx3.3$ m"},
    {p:1,d:"Explains: the block keeps speeding up as long as net force is positive (even if decreasing); the speed peaks where the net force changes sign, not where the force is largest"},
    {p:1,d:"After $x=4$ only friction does work: $-f\\,d'=0-16$ J"},
    {p:1,d:"$d'=16/2=8$ m"},
    {p:1,d:"Finds speed at $x=2$: $W_{net}=\\int_0^2(10-3x)dx=14$ J so $v=\\sqrt{14}\\approx3.74$ m/s"},
    {p:1,d:"$P=Fv=(6\\text{ N})(3.74\\text{ m/s})\\approx22$ W"}],
   solution:String.raw`<p>(a) $W_F=\int_0^4(12-3x)\,dx=\left[12x-\tfrac32x^2\right]_0^4=48-24=24$ J. (Check: the area of a triangle, $\tfrac12(4)(12)=24$ J.)</p>
<p>(b) Friction: $f=\mu_kmg=0.10(2)(10)=2$ N, constant, so $W_f=-(2)(4)=-8$ J. Then $W_{net}=24-8=16$ J $=\tfrac12(2)v^2\Rightarrow v=4$ m/s.</p>
<p>(c) Net force $F_{net}=12-3x-2=10-3x$. From the work-energy theorem $dK/dx=F_{net}$, so $K$ keeps growing while $F_{net}>0$ and is maximum where $F_{net}=0$: $x=10/3\approx3.3$ m. At $x=0$ the force is biggest, but speed is determined by the <i>accumulated</i> work (area), and the block still gets positive net work all the way to $x=10/3$ m. After that friction beats the decreasing push and the block slows even though $F$ is still applied. (Peak speed there: $K=\int_0^{10/3}(10-3x)dx=50/3$ J, $v\approx4.08$ m/s, slightly above the 4 m/s at $x=4$.)</p>
<p>(d) Beyond $x=4$ only friction does work: $-f\,d'=0-16\Rightarrow d'=8$ m (the block stops at $x=12$ m).</p>
<p>(e) $W_{net}(0\to2)=\int_0^2(10-3x)dx=20-6=14$ J, so $\tfrac12(2)v^2=14$, $v=\sqrt{14}\approx3.74$ m/s. $F(2)=12-6=6$ N. $P=Fv=6(3.74)\approx22$ W (only the applied force's power; friction removes energy at $2\times3.74\approx7.5$ W).</p>`}
  ]
});
