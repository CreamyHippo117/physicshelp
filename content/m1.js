PH.unit({
  id:"m1", course:"mech", order:30, hours:7,
  title:"Mechanics 1: Kinematics",
  blurb:"Motion in 1D and 2D, built from derivatives and integrals. Constant-acceleration formulas are a special case, not the starting point.",
  needs:["prereq1","prereq2"],
  goals:[
    "Move between $x(t)$, $v(t)$, $a(t)$ using derivatives, integrals and initial conditions",
    "Know exactly when $v=v_0+at$ and friends are allowed (constant $a$ only)",
    "Read slopes and areas on motion graphs, including signed area vs distance traveled",
    "Solve projectile problems by treating $x$ and $y$ independently",
    "Solve $a=f(v)$ and $a=f(x)$ problems with separation of variables"
  ],
  lessons:[
  {id:"l1", title:"Position, velocity, acceleration", html:String.raw`
<p>Everything in kinematics is calculus on one function, the position $x(t)$ (or vector $\vec r(t)$):</p>
$$v=\frac{dx}{dt},\qquad a=\frac{dv}{dt}=\frac{d^2x}{dt^2},\qquad x(t)=x_0+\int_0^t v\,dt',\qquad v(t)=v_0+\int_0^t a\,dt'$$
<p>The integrals need <b>initial conditions</b> ($x_0$, $v_0$). On the AP, forgetting the constant of integration is the most common lost point in a "derive" question.</p>
<div class="box key"><b>Signs matter.</b> Velocity is signed (direction). Speed is $|v|$. A particle can be speeding up with negative acceleration if its velocity is also negative.</div>
<p><b>Displacement vs distance.</b> Displacement is $\Delta x=\int v\,dt$ (signed). Distance traveled is $\int |v|\,dt$: split the integral wherever $v$ changes sign.</p>
<div class="box trap"><b>Trap:</b> "At rest" means $v=0$ <i>now</i>, not $a=0$. At the top of a throw, $v=0$ but $a=-g$.</div>`},
  {id:"l2", title:"Constant acceleration: where the formulas come from", html:String.raw`
<p>If $a$ is a constant, integrate once and twice:</p>
$$v=v_0+at,\qquad x=x_0+v_0t+\tfrac12at^2$$
<p>Eliminating $t$ gives $v^2=v_0^2+2a(x-x_0)$. These hold <b>only</b> for constant $a$. If $a$ depends on $t$, $x$ or $v$, go back to integrals.</p>
<p>Useful chain-rule trick for $a$ as a function of position:</p>
$$a=\frac{dv}{dt}=\frac{dv}{dx}\frac{dx}{dt}=v\frac{dv}{dx}\quad\Rightarrow\quad \int v\,dv=\int a\,dx$$
<p>This is the first version of the work-energy theorem you will meet in Unit 3.</p>
<svg class="fig" viewBox="0 0 340 190" width="340" role="img" aria-label="v versus t graph, a line rising from v0 to v with the area underneath shaded">
<line x1="40" y1="160" x2="320" y2="160" stroke="currentColor"/><line x1="40" y1="160" x2="40" y2="15" stroke="currentColor"/>
<polygon points="40,160 40,100 280,40 280,160" fill="currentColor" fill-opacity=".12"/>
<line x1="40" y1="100" x2="280" y2="40" stroke="currentColor" stroke-width="2.5"/>
<text x="300" y="178">t</text><text x="18" y="22">v</text><text x="6" y="104">v₀</text><text x="285" y="35">v</text><text x="270" y="178">t</text>
<text x="120" y="135">area = Δx</text><text x="150" y="62">slope = a</text></svg>`},
  {id:"l3", title:"Reading motion graphs", html:String.raw`
<table><tr><th>Graph</th><th>Slope gives</th><th>Area under gives</th></tr>
<tr><td>$x$ vs $t$</td><td>$v$</td><td>(nothing useful)</td></tr>
<tr><td>$v$ vs $t$</td><td>$a$</td><td>$\Delta x$</td></tr>
<tr><td>$a$ vs $t$</td><td>"jerk"</td><td>$\Delta v$</td></tr></table>
<p>Curvature of $x(t)$: concave up means $a>0$, concave down means $a<0$. An inflection point is where $a$ changes sign. Areas <b>below</b> the axis are negative displacement.</p>
<p>The AP often asks you to sketch $v(t)$ or $a(t)$ from a description, or to go from one graph to another. Practice: label the sign and rough size of slope in each interval before drawing.</p>`},
  {id:"l4", title:"Projectiles and variable acceleration", html:String.raw`
<p><b>Projectiles (no air resistance).</b> Horizontal and vertical motion are independent. With launch speed $v_0$ at angle $\theta$ above horizontal and $g$ pointing down:</p>
$$v_x=v_0\cos\theta,\qquad v_y=v_0\sin\theta-gt,\qquad x=v_0\cos\theta\,t,\qquad y=v_0\sin\theta\,t-\tfrac12gt^2$$
<p>The one thing the two directions share is the time $t$. For a launch and landing at the same height: time of flight $T=2v_0\sin\theta/g$, range $R=v_0^2\sin2\theta/g$, max range at $45^\circ$.</p>
<p><b>Variable acceleration.</b> Example: $a=-kv$ (linear drag). Separate and integrate:</p>
$$\frac{dv}{dt}=-kv\Rightarrow\int_{v_0}^{v}\frac{dv'}{v'}=-k\int_0^t dt'\Rightarrow v=v_0e^{-kt}$$
<p>Then $x=\int v\,dt=\frac{v_0}{k}(1-e^{-kt})$, so the object approaches a finite stopping distance $v_0/k$ but never quite stops in finite time. You will see this exact structure again with terminal velocity (Unit 2), the RC circuit (E&amp;M 3) and the RL circuit.</p>`}
  ],
  examples:[
  {id:"x1", title:"Distance vs displacement", problem:String.raw`<p>A particle has $x(t)=t^3-6t^2+9t$ (SI units). Find the displacement and the total distance traveled from $t=0$ to $t=4$ s.</p>`,
   solution:String.raw`<p>$v=3t^2-12t+9=3(t-1)(t-3)$, so $v=0$ at $t=1,3$ and the particle turns around there.</p>
<p>$x(0)=0$, $x(1)=4$, $x(3)=0$, $x(4)=4$. Displacement $=4$ m. Distance $=|4-0|+|0-4|+|4-0|=12$ m.</p>`},
  {id:"x2", title:"Velocity as a function of position", problem:String.raw`<p>A block has acceleration $a=-4x$ (SI) and is at $x=0.5$ m moving at $v=0$. Find its speed at $x=0$.</p>`,
   solution:String.raw`<p>Use $v\,dv=a\,dx$: $\int_0^{v}v'\,dv'=\int_{0.5}^{0}(-4x)\,dx$, so $\tfrac12v^2=-2x^2\Big|_{0.5}^{0}=0+2(0.25)=0.5$. Thus $v^2=1$, $|v|=1$ m/s.</p><p>Note you could not use $v^2=v_0^2+2a\Delta x$ here because $a$ is not constant.</p>`},
  {id:"x3", title:"Projectile hitting a target", problem:String.raw`<p>A ball is launched from the ground at $v_0=20$ m/s, $\theta=30^\circ$ (use $g=10$ m/s²). Find the time of flight, the range, and the maximum height.</p>`,
   solution:String.raw`<p>$v_{0y}=10$ m/s, $v_{0x}=10\sqrt3\approx17.3$ m/s. Time of flight $T=2(10)/10=2$ s. Range $=17.3\times2\approx34.6$ m. Max height: $v_y=0$ at $t=1$ s, $y=10(1)-5(1)^2=5$ m.</p>`}
  ],
  mcq:[
  {id:"q1", q:String.raw`<p>A particle's position is $x(t)=t^3-6t^2+9t$ (SI). The total distance it travels from $t=0$ to $t=4$ s is</p>`, choices:["4 m","8 m","12 m","16 m","20 m"], a:2,
   why:String.raw`<p>$v=3(t-1)(t-3)$ changes sign at 1 s and 3 s. $x$ goes $0\to4\to0\to4$, so distance $=4+4+4=12$ m while displacement is only 4 m.</p>`},
  {id:"q2", q:String.raw`<p>A particle has $a(t)=6t$ (SI), starts with $v=2$ m/s at $x=0$. Its position at $t=3$ s is</p>`, choices:["21 m","27 m","29 m","33 m","45 m"], a:3,
   why:String.raw`<p>$v=2+3t^2$, so $x=2t+t^3$. At $t=3$: $6+27=33$ m. Using $x=v_0t+\tfrac12at^2$ would be wrong since $a$ is not constant.</p>`},
  {id:"q3", q:String.raw`<p>A ball is launched from level ground at 20 m/s at $30^\circ$ above horizontal. Taking $g=10$ m/s² and neglecting air resistance, the horizontal range is closest to</p>`, choices:["17 m","20 m","35 m","40 m","69 m"], a:2,
   why:String.raw`<p>$R=v_0^2\sin2\theta/g=400(0.866)/10\approx34.6$ m.</p>`},
  {id:"q4", q:String.raw`<p>A ball is thrown straight up. At the very top of its flight, ignoring air resistance, its velocity and acceleration are</p>`, choices:["$v=0$ and $a=0$","$v=0$ and $a=g$ downward","$v$ upward and $a=0$","$v$ downward and $a=g$ downward","$v=0$ and $a$ upward"], a:1,
   why:String.raw`<p>The velocity is momentarily zero, but gravity keeps acting: $a=g$ downward the whole time. Zero velocity does not mean zero acceleration.</p>`},
  {id:"q5", q:String.raw`<p>An object moves along a line with $a=-kv$, where $k>0$, and initial speed $v_0$. The total distance it travels before stopping is</p>`, choices:["$v_0/k$","$v_0^2/2k$","$kv_0$","$v_0\\ln2/k$","infinite"], a:0,
   why:String.raw`<p>$v=v_0e^{-kt}$, so $x=\int_0^\infty v_0e^{-kt}dt=v_0/k$. (Alternatively $a=v\,dv/dx=-kv$ gives $dv/dx=-k$, $\Delta x=v_0/k$.) Check units: $k$ is 1/s, so only $v_0/k$ has dimensions of length.</p>`},
  {id:"q6", q:String.raw`<p>Ball A is dropped from rest from a height $h$. At the same instant ball B is launched horizontally from the same height. Neglecting air resistance, which is true?</p>`, choices:["A lands first","B lands first","They land at the same time","The one with larger speed lands first","It depends on B's launch speed"], a:2,
   why:String.raw`<p>The vertical motion is identical (zero initial vertical velocity, same $g$, same $h$). Horizontal velocity does not affect the fall time.</p>`},
  {id:"q7", q:String.raw`<p>A particle moves along $x$ with $v^2=4x$ (SI) for $x>0$. Its acceleration is</p>`, choices:["$1$ m/s²","$2$ m/s²","$4$ m/s²","$2\\sqrt{x}$ m/s²","not constant"], a:1,
   why:String.raw`<p>$a=v\,dv/dx=\tfrac12\,d(v^2)/dx=\tfrac12(4)=2$ m/s², constant.</p>`},
  {id:"q8", q:String.raw`<p>A car speeds up uniformly from 10 m/s to 30 m/s while traveling 100 m. How long does this take?</p>`, choices:["2.5 s","4 s","5 s","8 s","10 s"], a:2,
   why:String.raw`<p>Average speed $=20$ m/s so $t=100/20=5$ s. (Equivalently $a=(30^2-10^2)/(2\cdot100)=4$ m/s², $t=20/4=5$ s.)</p>`}
  ],
  frq:[
  {id:"f1", type:"Mathematical routines", title:"Drag on a sliding puck",
   prompt:String.raw`<p>A puck of mass $m$ slides on a horizontal surface. Because of a thin fluid layer its acceleration is $a=-kv$, where $k$ is a positive constant. At $t=0$ the puck is at $x=0$ moving with velocity $v_0$ in the $+x$ direction.</p>
<p>(a) Derive $v(t)$.<br>(b) Derive $x(t)$.<br>(c) Determine the total distance the puck slides.<br>(d) Determine the time at which the speed has fallen to $v_0/2$.<br>(e) Sketch $v$ versus $t$ and $x$ versus $t$ on separate axes, labeling any intercepts and asymptotes.</p>`,
   pts:[
    {p:1,d:"Separates variables ($dv/v=-k\\,dt$) or states an equivalent correct differential equation"},
    {p:1,d:"Integrates with correct limits or initial condition, gets $v=v_0e^{-kt}$"},
    {p:1,d:"Integrates $v(t)$ for $x$ and applies $x(0)=0$"},
    {p:1,d:"$x(t)=\\frac{v_0}{k}(1-e^{-kt})$"},
    {p:1,d:"Stopping distance $v_0/k$ (limit as $t\\to\\infty$)"},
    {p:1,d:"$t=\\ln2/k$ with consistent work"},
    {p:1,d:"Sketches: $v$ decays from $v_0$ to a horizontal asymptote at 0; $x$ rises from 0 toward asymptote $v_0/k$, concave down"}],
   solution:String.raw`<p>(a) $\dfrac{dv}{dt}=-kv\Rightarrow\int_{v_0}^v\dfrac{dv'}{v'}=-k\int_0^tdt'\Rightarrow \ln\dfrac{v}{v_0}=-kt\Rightarrow v=v_0e^{-kt}$.</p>
<p>(b) $x=\int_0^tv_0e^{-kt'}dt'=\dfrac{v_0}{k}\left(1-e^{-kt}\right)$.</p>
<p>(c) As $t\to\infty$, $x\to v_0/k$.</p>
<p>(d) $e^{-kt}=\tfrac12\Rightarrow t=\ln2/k$.</p>
<p>(e) $v(t)$: starts at $v_0$, exponential decay, asymptote $v=0$. $x(t)$: starts at 0 with slope $v_0$, concave down, asymptote $x=v_0/k$.</p>
<p class="mut">Check units: $k$ has units 1/s, so $v_0/k$ is a length. Always do this.</p>`}
  ]
});
