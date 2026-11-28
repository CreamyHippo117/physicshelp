PH.unit({
  id:"e5", course:"em", order:140, hours:14,
  title:"E&M 5: Electromagnetic Induction",
  blurb:"Changing magnetic flux makes emf. Faraday and Lenz, motional emf and the rod-on-rails ODE, inductance, LR and LC circuits as differential equations, and Maxwell's four equations as the summary of all of E&M.",
  needs:["e4","e3"],
  goals:[
    "Compute magnetic flux and use $\\varepsilon=-d\\Phi/dt$, including time-dependent $B(t)$ and moving or rotating loops",
    "Determine induced-current direction with Lenz's law in many different situations",
    "Derive motional emf and solve the sliding-rod ODE for $v(t)$ and terminal velocity",
    "Use $\\varepsilon=-L\\,dI/dt$, $L$ for a solenoid, mutual inductance, and $U=\\tfrac12LI^2$",
    "Solve LR circuits (rise and decay, $\\tau=L/R$) and LC oscillations ($\\omega=1/\\sqrt{LC}$) as differential equations",
    "State what each of Maxwell's equations says physically"
  ],
  lessons:[
  {id:"l1", title:"Magnetic flux and Faraday's law", videos:[{title:"8.02x - Lect 16 - Electromagnetic Induction, Faraday's Law, Lenz Law, SUPER DEMO",url:"https://www.youtube.com/watch?v=nGQbA2jwkWI",src:"Walter Lewin (MIT 8.02)",note:"Faraday's law and non-conservative fields, with demos"}], html:String.raw`
<p>The <b>magnetic flux</b> through a surface is the field "threading" it:</p>
$$\Phi_B=\int\vec B\cdot d\vec A,\qquad \Phi_B=BA\cos\theta\ \text{(uniform }\vec B\text{, flat surface)}$$
<p>where $d\vec A$ points along the surface normal $\hat n$ and $\theta$ is the angle between $\vec B$ and $\hat n$. Unit: weber, 1 Wb = 1 T·m². Flux is positive if $\vec B$ passes through along $\hat n$, negative if against. The choice of $\hat n$ is yours, but it is tied to the positive sense around the loop by a right-hand rule: curl your fingers around the loop in the direction you call positive, and your thumb gives $\hat n$.</p>
<p><b>Faraday's law.</b> An emf appears in a loop whenever the flux through it changes:</p>
$$\varepsilon=-\frac{d\Phi_B}{dt}\qquad(\text{for }N\text{ turns: }\varepsilon=-N\,\frac{d\Phi_B}{dt})$$
<p>An emf $\varepsilon$ drives a current $I=\varepsilon/R$ if the loop has resistance $R$. Three different things can change $\Phi_B=BA\cos\theta$, and each one counts:</p>
<ul><li>$B$ changes with time (a magnet moves, an electromagnet's current changes, ...)</li>
<li>the area $A$ changes (a loop is stretched or slides out of a field)</li>
<li>the angle $\theta$ changes (a loop rotates: $\Phi=BA\cos\omega t$ gives $\varepsilon=BA\omega\sin\omega t$, an AC generator)</li></ul>
<div class="box key"><b>Only the rate of change matters.</b> A huge constant flux gives no emf; a tiny flux changing quickly can give a large one. The emf is zero when $d\Phi/dt=0$ even if $\Phi$ is at its maximum.</div>
<p><b>What is doing the pushing?</b> A changing $B$ creates an <i>electric</i> field that circulates around, even where there is no wire. The loop-integral form of Faraday's law is</p>
$$\oint\vec E\cdot d\vec l=-\frac{d}{dt}\int\vec B\cdot d\vec A$$
<p>This $\vec E$ is <b>not conservative</b>: its line integral around a closed path is not zero, so you cannot assign it a potential. Example: a uniform $\vec B(t)$ fills a circular region of radius $R$. At radius $r&lt;R$, symmetry says $E$ is tangential and constant on the circle, so $E(2\pi r)=\pi r^2\,|dB/dt|$ and $E=\tfrac r2|dB/dt|$. Even a copper-free circle of empty space has this $E$ field.</p>
<p><b>Outside the field region.</b> If the field fills only a cylinder of radius $R$ and you look at a circle of radius $r&gt;R$, the flux through it is still only $\pi R^2B$ (no field beyond $R$), so $E(2\pi r)=\pi R^2|dB/dt|$ and $E=\dfrac{R^2}{2r}\left|\dfrac{dB}{dt}\right|$. The electric field is nonzero outside the region even though $B=0$ there. The work done per charge $q$ going once round a circle is $q\varepsilon=qE\,2\pi r$, whatever the circle.</p>
<div class="box trap"><b>Trap:</b> the flux through a loop is the flux through the loop's <i>area</i>, so only the field within the loop's area matters and only the part of the area actually in the field (when a loop is half out of a magnetic region, use the overlapping area).</div>`},

  {id:"l2", title:"Lenz's law: finding the direction", videos:[{title:"Search: Lenz's law direction of induced current",url:"https://www.youtube.com/results?search_query=Lenz's+law+direction+of+induced+current+examples+AP+Physics+C",src:"YouTube search",note:"Work several cases yourself before watching the answer"}], html:String.raw`
<p>The minus sign in Faraday's law is <b>Lenz's law</b>: <i>the induced current flows in whichever direction creates a magnetic field that opposes the <u>change</u> in flux</i>. Opposes the <i>change</i>, not the flux itself. Why must it be this way? If the induced current helped the change, a tiny nudge would grow without bound and create energy from nothing. The sign is energy conservation.</p>
<p><b>Four-step method.</b></p>
<ol><li>Which way does the original $\vec B$ point through the loop?</li>
<li>Is the flux in that direction increasing or decreasing?</li>
<li>Induced $\vec B$ points <b>against</b> the original if flux is increasing; <b>along</b> it if decreasing. (If the flux is not changing, no induced current.)</li>
<li>Right-hand rule on the loop: thumb along the needed induced $\vec B$, fingers show current direction.</li></ol>
<svg class="fig" viewBox="0 0 420 190" width="420" role="img" aria-label="Bar magnet with north pole down approaching a horizontal loop from above; the loop is shown with induced counterclockwise current as seen from above">
<rect x="130" y="10" width="40" height="30" fill="none" stroke="currentColor" stroke-width="2"/><text x="144" y="30">S</text>
<rect x="130" y="40" width="40" height="30" fill="currentColor" fill-opacity=".2" stroke="currentColor" stroke-width="2"/><text x="144" y="60">N</text>
<line x1="150" y1="5" x2="150" y2="-5" stroke="currentColor"/>
<line x1="200" y1="25" x2="200" y2="62" stroke="currentColor" stroke-width="2.5"/><polygon points="195,58 200,68 205,58" fill="currentColor"/><text x="210" y="45">v</text>
<ellipse cx="150" cy="130" rx="85" ry="22" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M150 108 L165 109" stroke="currentColor" stroke-width="0"/><polygon points="143,152 153,152 148,147" fill="none"/>
<polygon points="236,128 230,138 224,128" fill="currentColor"/><text x="248" y="134">I (CCW seen from above)</text>
<line x1="150" y1="75" x2="150" y2="105" stroke="currentColor" stroke-dasharray="3 3"/><polygon points="145,100 150,110 155,100" fill="currentColor"/><text x="156" y="95">B magnet</text>
<line x1="80" y1="155" x2="80" y2="120" stroke="currentColor" stroke-width="2"/><polygon points="75,125 80,115 85,125" fill="currentColor"/><text x="20" y="175">B induced (up)</text></svg>
<p><b>Case catalogue.</b> Work each one with the four steps until it is automatic.</p>
<table><tr><th>Situation</th><th>Original flux</th><th>Induced field</th><th>Current (viewed from the side the original $\vec B$ comes from)</th></tr>
<tr><td>N pole moves toward loop</td><td>pointing away from magnet, increasing</td><td>toward magnet</td><td>counterclockwise as seen from the magnet</td></tr>
<tr><td>N pole moves away from loop</td><td>pointing away from magnet, decreasing</td><td>away from magnet</td><td>clockwise as seen from the magnet</td></tr>
<tr><td>S pole moves toward loop</td><td>pointing toward magnet, increasing</td><td>away from magnet</td><td>clockwise as seen from the magnet</td></tr>
<tr><td>Loop enters region of $\vec B$ (into page)</td><td>into page, increasing</td><td>out of page</td><td>counterclockwise</td></tr>
<tr><td>Loop leaves region of $\vec B$ (into page)</td><td>into page, decreasing</td><td>into page</td><td>clockwise</td></tr>
<tr><td>$B$ out of page, strengthening</td><td>out of page, increasing</td><td>into page</td><td>clockwise</td></tr>
<tr><td>Loop shrinking in $\vec B$ into page</td><td>into page, decreasing</td><td>into page</td><td>clockwise</td></tr></table>
<p><b>Two coils.</b> Closing a switch in the primary coil makes its current (and field) grow from zero. The secondary sees an increasing flux in the same direction as the primary's field, so its induced current makes a field opposing that: the secondary current flows <i>opposite</i> to the primary's sense at that instant. Opening the switch makes the secondary current flow in the <i>same</i> sense as the primary was running (it tries to keep the flux up).</p>
<p><b>Force on the loop.</b> Lenz's law is also a statement about forces: a loop being pushed into a field region feels a magnetic force that resists the motion, and the work you do to push it becomes heat in the loop. A conducting plate swinging through a magnet's field gets eddy currents that brake it.</p>
<div class="box trap"><b>Trap:</b> the induced field does not necessarily point opposite to the original field. If the original flux is <i>decreasing</i>, the induced field points the <i>same</i> way, trying to keep it up. Always ask "increasing or decreasing?" first.</div>`},

  {id:"l3", title:"Motional emf and the sliding rod", videos:[{title:"Search: motional emf rod sliding on rails",url:"https://www.youtube.com/results?search_query=motional+emf+conducting+rod+sliding+on+rails+resistor+terminal+velocity+AP+Physics+C",src:"YouTube search",note:"Look for the differential-equation treatment of terminal velocity"}], html:String.raw`
<p>Move a conductor of length $L$ with velocity $\vec v$ through a field. Charges inside feel $q\vec v\times\vec B$ and are pushed along the conductor until electric force balances it. For a straight rod with $\vec v$, $\vec B$ and the rod mutually perpendicular, the emf is the work per charge:</p>
$$\varepsilon=\int(\vec v\times\vec B)\cdot d\vec l=BLv$$
<p>The same result follows from Faraday: a rod sliding on rails (area $=Lx$) sweeps flux $\Phi=BLx$, so $|\varepsilon|=d\Phi/dt=BLv$.</p>
<svg class="fig" viewBox="0 0 340 190" width="340" role="img" aria-label="Rod sliding to the right on two horizontal rails connected on the left by a resistor, with magnetic field into the page; induced current is counterclockwise and the magnetic force on the rod points left">
<defs><g id="e5x"><circle r="5" fill="none" stroke="currentColor"/><line x1="-3.5" y1="-3.5" x2="3.5" y2="3.5" stroke="currentColor"/><line x1="-3.5" y1="3.5" x2="3.5" y2="-3.5" stroke="currentColor"/></g></defs>
<line x1="40" y1="40" x2="320" y2="40" stroke="currentColor" stroke-width="2.5"/><line x1="40" y1="150" x2="320" y2="150" stroke="currentColor" stroke-width="2.5"/>
<line x1="40" y1="40" x2="40" y2="70" stroke="currentColor" stroke-width="2.5"/><line x1="40" y1="130" x2="40" y2="150" stroke="currentColor" stroke-width="2.5"/>
<polyline points="40,70 48,76 32,82 48,88 32,94 48,100 32,106 48,112 32,118 40,124 40,130" fill="none" stroke="currentColor" stroke-width="2"/><text x="52" y="100">R</text>
<g opacity=".55"><use href="#e5x" x="100" y="70"/><use href="#e5x" x="150" y="70"/><use href="#e5x" x="200" y="70"/><use href="#e5x" x="100" y="120"/><use href="#e5x" x="150" y="120"/><use href="#e5x" x="200" y="120"/></g>
<line x1="240" y1="40" x2="240" y2="150" stroke="currentColor" stroke-width="5"/><text x="248" y="115">rod, L</text>
<line x1="250" y1="75" x2="300" y2="75" stroke="currentColor" stroke-width="2.5"/><polygon points="296,70 306,75 296,80" fill="currentColor"/><text x="258" y="68">v</text>
<line x1="236" y1="95" x2="195" y2="95" stroke="currentColor" stroke-width="2.5"/><polygon points="199,90 189,95 199,100" fill="currentColor"/><text x="200" y="88">F_B</text>
<text x="250" y="25">I (up in rod)</text><text x="60" y="30">B into page, loop current counterclockwise</text></svg>
<p>Now close the circuit with a resistor $R$ (rails and rod resistances negligible):</p>
$$I=\frac{BLv}{R},\qquad F_B=ILB=\frac{B^2L^2v}{R}\ \text{(directed against }\vec v\text{, by Lenz)},\qquad P_{\text{dissipated}}=I^2R=\frac{B^2L^2v^2}{R}=F_Bv$$
<p>The power balance says the mechanical power you remove from the rod ($F_Bv$) equals the heat in the resistor.</p>
<p><b>The ODE for $v(t)$.</b> With no other horizontal force, Newton's second law on the rod (mass $m$) gives</p>
$$m\frac{dv}{dt}=-\frac{B^2L^2}{R}\,v\;\Rightarrow\; v(t)=v_0e^{-t/\tau},\qquad \tau=\frac{mR}{B^2L^2}$$
<p>and the rod coasts a total distance $v_0\tau$. This is the same equation as linear drag (Mechanics 1, 2). If an external constant force $F$ pulls the rod (or gravity, $F=mg$, for a rod sliding down vertical rails):</p>
$$m\frac{dv}{dt}=F-\frac{B^2L^2}{R}v\;\Rightarrow\; v(t)=v_t\left(1-e^{-t/\tau}\right),\qquad v_t=\frac{FR}{B^2L^2}$$
<p>At terminal velocity $dv/dt=0$: the applied and magnetic forces are equal. Terminal speed grows with $R$ (less current, less braking) and falls with $B^2L^2$.</p>
<div class="box key"><b>Rotating rod.</b> A rod of length $L$ spinning at angular speed $\omega$ about one end in a perpendicular field $B$: each piece $dr$ at radius $r$ has speed $\omega r$, so $\varepsilon=\int_0^L B\omega r\,dr=\tfrac12B\omega L^2$.</div>
<div class="box trap"><b>Trap:</b> a loop moving at constant velocity entirely inside a <i>uniform</i> field has no emf: the flux does not change. Each side has a motional emf but they cancel around the loop. You need part of the loop to enter or leave the field, or the field to be nonuniform.</div>`},

  {id:"l4", title:"Inductance and magnetic energy", videos:[{title:"Inductors, Self-Inductance, LC & RL Circuits Lecture",url:"https://www.youtube.com/watch?v=8fkKfkF9dw4",src:"YouTube",note:"Self-inductance and energy in inductors"}], html:String.raw`
<p>A coil's own current makes a field, and that field's flux goes through the coil itself. If the current changes, that flux changes and the coil induces an emf in itself: <b>self-induction</b>. Flux linkage is proportional to current, $N\Phi_B=LI$, which defines the <b>inductance</b> $L$ (unit: henry, 1 H = 1 V·s/A). Faraday gives</p>
$$\varepsilon=-L\frac{dI}{dt}$$
<p>The emf opposes the <i>change</i> of current (Lenz again). It does not oppose the current itself. An inductor with steady current has no voltage across it.</p>
<p><b>Solenoid.</b> Length $\ell$, area $A$, $N$ turns, $n=N/\ell$. $B=\mu_0nI$, flux linkage $N\Phi=N(BA)=\mu_0N^2AI/\ell$, so</p>
$$L=\frac{\mu_0N^2A}{\ell}=\mu_0n^2A\ell$$
<p>$L$ depends only on geometry (and what fills the core). Inductance scales as $N^2$: doubling the turns on the same length quadruples $L$.</p>
<p><b>Mutual inductance.</b> If two coils sit near each other, the current $I_1$ in coil 1 sends flux through coil 2. Define $M$ by $N_2\Phi_{21}=MI_1$, so</p>
$$\varepsilon_2=-M\frac{dI_1}{dt},\qquad M_{12}=M_{21}\ (\text{a symmetric result})$$
<p>That is how a transformer and a wireless charger work. A time-varying current in one coil makes an emf in the other.</p>
<p><b>Energy.</b> To raise the current from $0$ to $I$ against the back-emf, a source must deliver power $P=I|\varepsilon|=LI\,dI/dt$. So</p>
$$U_L=\int_0^ILI'\,dI'=\tfrac12LI^2$$
<p>This energy is stored in the magnetic field with density</p>
$$u_B=\frac{B^2}{2\mu_0}\ (\text{J/m}^3)$$
<p>Check for a solenoid: $u_BA\ell=\dfrac{(\mu_0nI)^2}{2\mu_0}A\ell=\tfrac12\mu_0n^2A\ell\,I^2=\tfrac12LI^2$ ✓. The parallel with a capacitor, $U_C=\tfrac12CV^2$ with $u_E=\tfrac12\varepsilon_0E^2$, is exact.</p>
<div class="box trap"><b>Trap:</b> the inductor's voltage is $L\,dI/dt$, set by how fast the current <i>changes</i>. A current cannot jump instantly through an inductor (it would require infinite voltage); but voltage across an inductor <i>can</i> jump. A capacitor is the opposite: the voltage cannot jump, the current can.</div>`},

  {id:"l5", title:"LR, LC and RLC circuits", videos:[{title:"Inductors, Self-Inductance, LC & RL Circuits Lecture",url:"https://www.youtube.com/watch?v=8fkKfkF9dw4",src:"YouTube",note:"RL and LC sections"},{title:"26 - The RLC Circuit - Free Damped Oscillations",url:"https://www.youtube.com/watch?v=lrtmeQxZ5pE",src:"YouTube",note:"Derives the RLC differential equation"}], html:String.raw`
<p><b>LR circuit: current rising.</b> A battery $\varepsilon$, resistor $R$ and inductor $L$ in series, switch closed at $t=0$. Kirchhoff's loop rule (voltage across the inductor is $L\,dI/dt$):</p>
$$\varepsilon-IR-L\frac{dI}{dt}=0\;\Rightarrow\; I(t)=\frac{\varepsilon}{R}\left(1-e^{-t/\tau}\right),\qquad \tau=\frac LR$$
<p>Then $V_L=L\,dI/dt=\varepsilon e^{-t/\tau}$. Immediately after closing, $I=0$ and the inductor takes the whole battery voltage (it acts like an <b>open circuit</b>); at long times $I=\varepsilon/R$ and $V_L=0$ (it acts like a <b>plain wire</b>). Initial slope: $dI/dt=\varepsilon/L$.</p>
<svg class="fig" viewBox="0 0 330 160" width="330" role="img" aria-label="Series LR circuit with battery, switch, resistor and inductor, and a graph of current rising exponentially toward epsilon over R with time constant L over R">
<polyline points="20,40 20,20 120,20 120,40" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="12" y1="40" x2="28" y2="40" stroke="currentColor" stroke-width="3"/><line x1="16" y1="50" x2="24" y2="50" stroke="currentColor" stroke-width="3"/><text x="32" y="48">ε</text>
<polyline points="20,50 20,120 120,120 120,110" fill="none" stroke="currentColor" stroke-width="2"/>
<polyline points="120,40 120,50 112,54 128,60 112,66 128,72 112,78 128,84 120,88 120,110" fill="none" stroke="currentColor" stroke-width="2"/><text x="132" y="72">R</text>
<path d="M50 20 q5 -14 10 0 q5 -14 10 0 q5 -14 10 0 q5 -14 10 0" fill="none" stroke="currentColor" stroke-width="2"/><text x="52" y="12">L</text>
<polyline points="20,20 50,20" fill="none" stroke="currentColor" stroke-width="2"/><polyline points="90,20 120,20" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="60" y1="120" x2="80" y2="104" stroke="currentColor" stroke-width="2"/><text x="52" y="140">switch</text>
<line x1="190" y1="130" x2="320" y2="130" stroke="currentColor"/><line x1="190" y1="130" x2="190" y2="20" stroke="currentColor"/>
<path d="M190 130 C215 60 240 38 310 32" fill="none" stroke="currentColor" stroke-width="2.5"/>
<line x1="190" y1="30" x2="320" y2="30" stroke="currentColor" stroke-dasharray="3 3"/><text x="196" y="24">ε/R</text><text x="300" y="146">t</text><text x="170" y="20">I</text></svg>
<p><b>LR circuit: current decaying.</b> If the battery is removed from a circuit already carrying $I_0$ (the loop stays closed through $R$), then $L\,dI/dt+IR=0$ and</p>
$$I(t)=I_0e^{-t/\tau},\qquad \tau=L/R$$
<p>The energy $\tfrac12LI_0^2$ stored in the field is all dissipated in $R$. Opening a switch in series with a large inductor, however, forces $dI/dt$ huge and makes a large voltage spike (an arc across the switch).</p>
<p><b>LC circuit.</b> Charged capacitor connected to an inductor, no resistance. Loop rule: $L\,dI/dt+q/C=0$ with $I=dq/dt$ (the current is the rate the capacitor <i>discharges</i>, with sign chosen so that $I=\dot q$ is the rate of change of the charge on the plate):</p>
$$\frac{d^2q}{dt^2}=-\frac{1}{LC}\,q\;\Rightarrow\; q=Q_0\cos\omega t,\quad I=-\omega Q_0\sin\omega t,\quad \omega=\frac{1}{\sqrt{LC}}$$
<p>This is simple harmonic motion with exact mechanical analogs: charge $q\leftrightarrow x$, current $I\leftrightarrow v$, inductance $L\leftrightarrow m$ (inertia: resists changes in $I$), and $1/C\leftrightarrow k$ (spring stiffness). The energy sloshes back and forth:</p>
$$U_C=\frac{q^2}{2C}=\frac{Q_0^2}{2C}\cos^2\omega t,\qquad U_L=\tfrac12LI^2=\frac{Q_0^2}{2C}\sin^2\omega t,\qquad U_C+U_L=\frac{Q_0^2}{2C}=\text{const}$$
<p>When $q=0$ the current is maximal $=\omega Q_0$ and all energy is in the inductor; when $I=0$ all energy is in the capacitor.</p>
<svg class="fig" viewBox="0 0 330 150" width="330" role="img" aria-label="Graph of charge q as cosine and current I as negative sine versus time for an LC circuit, one period">
<line x1="30" y1="75" x2="320" y2="75" stroke="currentColor"/><line x1="30" y1="10" x2="30" y2="140" stroke="currentColor"/>
<path d="M30 20 C70 20 90 75 117 75 C145 75 160 130 175 130 C205 130 225 75 247 75 C275 75 290 20 310 20" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M30 75 C45 75 60 130 90 130 C120 130 140 75 175 75 C205 75 215 20 247 20 C275 20 295 75 318 75" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="6 3"/>
<text x="36" y="18">q (solid)</text><text x="236" y="140">I (dashed)</text><text x="300" y="68">t</text></svg>
<p><b>RLC (qualitative).</b> Add a resistor: $L\ddot q+R\dot q+q/C=0$, a damped oscillator with $R\leftrightarrow$ drag coefficient $b$. For small $R$ the charge oscillates inside an exponentially decaying envelope, $q=Q_0e^{-Rt/2L}\cos\omega't$ with $\omega'=\sqrt{1/LC-(R/2L)^2}$, slightly slower than the undamped $\omega$. The energy drains as heat ($dU/dt=-I^2R$). If $R\ge2\sqrt{L/C}$ the oscillation stops altogether: critical damping ($R=2\sqrt{L/C}$) and overdamping.</p>
<div class="box trap"><b>Trap:</b> in an LC circuit $\omega=1/\sqrt{LC}$ is the <i>angular</i> frequency in rad/s. The frequency in Hz is $f=\omega/2\pi$ and the period is $T=2\pi\sqrt{LC}$. Also, the amplitude of $I$ is $\omega Q_0$, not $Q_0/\omega$.</div>`},

  {id:"l6", title:"Maxwell's equations (summary and enrichment)", videos:[{title:"Search: Maxwell's equations explained",url:"https://www.youtube.com/results?search_query=Maxwell's+equations+explained+integral+form+displacement+current",src:"YouTube search",note:"Pick a conceptual overview"}], html:String.raw`
<p>The whole of classical electricity and magnetism is four equations plus the Lorentz force $\vec F=q(\vec E+\vec v\times\vec B)$. In integral form (vacuum, with charges $Q$ and currents $I$ as the sources):</p>
<table><tr><th>Name</th><th>Equation</th><th>What it says</th></tr>
<tr><td>Gauss, electric</td><td>$\displaystyle\oint\vec E\cdot d\vec A=\frac{Q_{\text{enc}}}{\varepsilon_0}$</td><td>Electric charge produces $\vec E$ lines that start on positive charge and end on negative charge (Coulomb's law)</td></tr>
<tr><td>Gauss, magnetic</td><td>$\displaystyle\oint\vec B\cdot d\vec A=0$</td><td>No magnetic charges (monopoles): magnetic field lines form closed loops, never start or end</td></tr>
<tr><td>Faraday</td><td>$\displaystyle\oint\vec E\cdot d\vec l=-\frac{d\Phi_B}{dt}$</td><td>A changing magnetic flux creates a circulating electric field (induction)</td></tr>
<tr><td>Ampère-Maxwell</td><td>$\displaystyle\oint\vec B\cdot d\vec l=\mu_0I_{\text{enc}}+\mu_0\varepsilon_0\frac{d\Phi_E}{dt}$</td><td>Electric current <i>and</i> a changing electric flux create a circulating magnetic field</td></tr></table>
<p>Two of these (Gauss for $E$ and Ampère) you used as symmetry shortcuts in earlier units; Faraday's law is this unit; the other two are structural statements: the field lines of $\vec B$ close on themselves, and the last term (below) completes the symmetry.</p>
<p><b>Displacement current (enrichment).</b> Ampère's law as you know it ($\oint\vec B\cdot d\vec l=\mu_0I_{\text{enc}}$) has a paradox. A circular-plate capacitor of radius $R$ is being charged by current $I$ in the wires. Take a circular Amperian loop in the wire: $I_{\text{enc}}=I$. Take a surface bulging <i>between</i> the plates instead; no current passes through it, but it has the same boundary. Contradiction. Maxwell's fix: the changing electric flux acts like a current. Between the plates $E=Q/(\varepsilon_0\pi R^2)$, so $\Phi_E=Q/\varepsilon_0$ and</p>
$$\varepsilon_0\frac{d\Phi_E}{dt}=\frac{dQ}{dt}=I\quad(\equiv I_d,\text{ the displacement current})$$
<p>With it, the field between the plates, at radius $r&lt;R$: $B(2\pi r)=\mu_0\varepsilon_0\frac{d}{dt}(E\pi r^2)=\mu_0I\frac{r^2}{R^2}$, so $B=\dfrac{\mu_0Ir}{2\pi R^2}$, exactly the field of a uniformly distributed current.</p>
<svg class="fig" viewBox="0 0 320 150" width="320" role="img" aria-label="Charging parallel-plate capacitor with current I in the wires, electric field between the plates increasing, and circular magnetic field loops around the axis between the plates">
<line x1="20" y1="75" x2="100" y2="75" stroke="currentColor" stroke-width="2.5"/><line x1="220" y1="75" x2="300" y2="75" stroke="currentColor" stroke-width="2.5"/>
<line x1="100" y1="30" x2="100" y2="120" stroke="currentColor" stroke-width="4"/><line x1="220" y1="30" x2="220" y2="120" stroke="currentColor" stroke-width="4"/>
<polygon points="68,70 78,75 68,80" fill="currentColor"/><text x="48" y="65">I</text>
<line x1="115" y1="55" x2="205" y2="55" stroke="currentColor" stroke-dasharray="4 3"/><line x1="115" y1="75" x2="205" y2="75" stroke="currentColor" stroke-dasharray="4 3"/><line x1="115" y1="95" x2="205" y2="95" stroke="currentColor" stroke-dasharray="4 3"/>
<polygon points="198,52 206,55 198,58" fill="currentColor"/><polygon points="198,72 206,75 198,78" fill="currentColor"/><polygon points="198,92 206,95 198,98" fill="currentColor"/>
<text x="140" y="46">E (growing)</text><ellipse cx="160" cy="75" rx="28" ry="42" fill="none" stroke="currentColor" stroke-opacity=".6"/><text x="125" y="140">B circles the E lines</text></svg>
<p><b>Electromagnetic waves.</b> Faraday and Ampère-Maxwell together mean a changing $\vec B$ makes $\vec E$ and a changing $\vec E$ makes $\vec B$. They can sustain each other in empty space as a wave traveling at $c=1/\sqrt{\mu_0\varepsilon_0}=3.00\times10^8$ m/s. Maxwell computed this and recognized it as the speed of light. You will rarely need to derive this for an exam question, but it is why the unit ends here, and the qualitative statements are fair game: $\vec E\perp\vec B$, both perpendicular to the direction of travel, and $E=cB$ in the wave.</p>
<div class="box key"><b>One sentence each.</b> (1) Charges make $\vec E$. (2) There are no magnetic charges. (3) Changing $\vec B$ makes circulating $\vec E$. (4) Currents and changing $\vec E$ make circulating $\vec B$.</div>`},

  {id:"l7", title:"Position-dependent B: a loop near a long straight wire", videos:[{title:"Search: flux through a loop near a long straight wire, mutual inductance",url:"https://www.youtube.com/results?search_query=flux+through+rectangular+loop+near+long+straight+wire+mutual+inductance+Faraday+AP+Physics+C",src:"YouTube search",note:"Watch for the integral over a thin strip dr"}], html:String.raw`
<p>$\Phi=BA\cos\theta$ is only valid when $B$ is uniform over the surface. When $B$ varies from point to point you must go back to $\Phi=\int\vec B\cdot d\vec A$ and chop the surface into pieces over which $B$ is nearly constant. The standard case: a long straight wire carrying current $I$ produces $B=\dfrac{\mu_0I}{2\pi r}$ (circling the wire, e4), which varies with the distance $r$ from the wire.</p>
<p>Take a rectangular loop in the same plane as the wire. Two sides of length $\ell$ run parallel to the wire; the near one is at distance $d$ and the far one at $d+a$. At distance $r$, $\vec B$ is perpendicular to the plane (into the page on one side of the wire, out on the other), and all points of a thin strip of width $dr$ and length $\ell$ have the same $B$. So $dA=\ell\,dr$ and</p>
$$\Phi=\int_d^{d+a}\frac{\mu_0I}{2\pi r}\,\ell\,dr=\frac{\mu_0I\ell}{2\pi}\ln\!\frac{d+a}{d}$$
<svg class="fig" viewBox="0 0 330 170" width="330" role="img" aria-label="Long vertical wire carrying current upward, and to its right a rectangular loop with near side at distance d and far side at distance d plus a; a thin strip of width dr at distance r is shaded">
<line x1="50" y1="5" x2="50" y2="165" stroke="currentColor" stroke-width="4"/><polygon points="45,22 50,8 55,22" fill="currentColor"/><text x="58" y="20">I</text>
<rect x="110" y="40" width="150" height="90" fill="none" stroke="currentColor" stroke-width="2.5"/>
<rect x="170" y="40" width="14" height="90" fill="currentColor" fill-opacity=".25" stroke="currentColor"/><text x="164" y="150">strip dr</text>
<line x1="50" y1="145" x2="110" y2="145" stroke="currentColor"/><text x="72" y="160">d</text>
<line x1="110" y1="30" x2="260" y2="30" stroke="currentColor"/><text x="175" y="24">a</text>
<text x="268" y="90">ℓ</text><text x="140" y="95">B into page</text></svg>
<p><b>Emf from a changing wire current.</b> The flux is proportional to $I$, so $\Phi=MI$ with the <b>mutual inductance</b> $M=\dfrac{\mu_0\ell}{2\pi}\ln\!\left(1+\dfrac ad\right)$ (geometry only) and</p>
$$|\varepsilon|=\left|\frac{d\Phi}{dt}\right|=M\left|\frac{dI}{dt}\right|$$
<p><b>Emf from motion.</b> Keep $I$ constant and move the loop directly away from the wire at speed $v$, so $d$ grows at rate $v$. Either differentiate $\Phi(d)$, or add the two motional emfs of the sides parallel to the wire. The near side sits in a stronger field than the far side, so they do not cancel:</p>
$$|\varepsilon|=B_{\text{near}}\ell v-B_{\text{far}}\ell v=\frac{\mu_0I\ell v}{2\pi}\left(\frac1d-\frac1{d+a}\right)$$
<p>Differentiating $\ln\frac{d+a}d$ gives the same thing. The two sides parallel to the wire have emfs pushing opposite ways round the loop; the sides perpendicular to the wire have no net emf for motion directly away.</p>
<p><b>Direction (Lenz).</b> Wire current up, loop to its right: $\vec B$ at the loop is into the page. If $I$ grows (or the loop approaches), flux into the page grows, so the induced current is counterclockwise. If $I$ falls or the loop moves away, the induced current is clockwise. The force on the loop always resists the change: for growing $I$ the near side carries current antiparallel to the wire (repelled, and the near side is in the stronger field), so the loop is pushed away; for a decreasing flux it is pulled in.</p>
<div class="box trap"><b>Trap:</b> do not use $B$ at the near edge (or the centre) times the area. $B$ varies like $1/r$, so you must integrate, and the answer contains a logarithm.</div>`},

  {id:"l8", title:"A loop entering, crossing and leaving a field region (graphs)", videos:[{title:"Search: loop moving through magnetic field region emf graph",url:"https://www.youtube.com/results?search_query=loop+moving+through+region+of+magnetic+field+flux+emf+current+graphs+entering+leaving+AP+Physics+C",src:"YouTube search",note:"Try to sketch the three graphs before watching"}], html:String.raw`
<p>A square loop of side $s$, resistance $R$ and speed $v$ moves to the right into a region of width $w\ge s$ with uniform field $B$ (into the page) and nothing outside. Let $x$ be the distance the leading edge has travelled past the region's left boundary, $x=vt$.</p>
<table><tr><th>Stage</th><th>Flux</th><th>Emf</th><th>Current ($B$ into page)</th><th>Force on loop</th></tr>
<tr><td>Entering, $0&lt;x&lt;s$</td><td>$Bsx$ (rising)</td><td>$Bsv$</td><td>$\dfrac{Bsv}{R}$, counterclockwise</td><td>$\dfrac{B^2s^2v}{R}$ against motion</td></tr>
<tr><td>Fully inside, $s&lt;x&lt;w$</td><td>$Bs^2$ (constant)</td><td>0</td><td>0</td><td>0</td></tr>
<tr><td>Leaving, $w&lt;x&lt;w+s$</td><td>falling to 0</td><td>$Bsv$ (opposite sign)</td><td>$\dfrac{Bsv}{R}$, clockwise</td><td>$\dfrac{B^2s^2v}{R}$ against motion</td></tr></table>
<svg class="fig" viewBox="0 0 360 200" width="360" role="img" aria-label="Three stacked graphs against time: flux rises linearly, stays flat, then falls linearly; emf is a positive pulse then zero then a negative pulse of the same size; force on the loop is a pulse during entry and the same direction pulse during exit">
<line x1="40" y1="45" x2="350" y2="45" stroke="currentColor"/><line x1="40" y1="10" x2="40" y2="55" stroke="currentColor"/>
<polyline points="40,45 110,15 250,15 320,45" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="2" y="20">Φ</text>
<line x1="40" y1="110" x2="350" y2="110" stroke="currentColor"/><line x1="40" y1="70" x2="40" y2="150" stroke="currentColor"/>
<polyline points="40,110 40,85 110,85 110,110 250,110 250,135 320,135 320,110" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="2" y="90">ε</text>
<line x1="40" y1="185" x2="350" y2="185" stroke="currentColor"/><line x1="40" y1="160" x2="40" y2="190" stroke="currentColor"/>
<polyline points="40,185 40,165 110,165 110,185 250,185 250,165 320,165 320,185" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="2" y="170">F</text><text x="330" y="198">t</text></svg>
<p>Notice what each graph is: the emf is minus the <b>slope</b> of the flux graph; the current graph has the emf's shape; and the force graph has the same sign twice. The emf and current reverse direction between entering and leaving, but the force on the loop is the <i>same</i> direction (opposing motion) both times, because Lenz's law says the loop is resisted whenever flux changes. While fully inside, each of the two sides has a motional emf $Bsv$, but they cancel around the loop, so no current and no force. If the region is narrower than the loop ($w&lt;s$) the flux plateaus when the whole region is inside the loop, and again there is no emf and no force.</p>
<p><b>Energy.</b> Work done by the agent pulling the loop at constant speed equals the heat: $W=F\cdot(\text{distance with current})$. For the full pass, $Q=2\cdot\dfrac{B^2s^2v}{R}\cdot s$. Check with $P=\varepsilon^2/R=B^2s^2v^2/R$ acting for time $s/v$ twice.</p>
<p><b>If the loop is not pulled</b> (mass $m$, coasting), $m\,dv/dt=-B^2s^2v/R$. Using $dv/dt=v\,dv/dx$ gives $m\,dv/dx=-B^2s^2/R$, so the speed falls <i>linearly with distance</i> while the loop is entering: $\Delta v=\dfrac{B^2s^3}{mR}$ for the whole entry. The same loss happens on exit. This is the same ODE as the sliding rod.</p>
<p><b>A loop falling out of (or into) a field.</b> A loop dropped so that its lower edge is in a field region while its upper edge is outside feels a magnetic force $B^2s^2v/R$ upward; it reaches a terminal speed $v_t=\dfrac{mgR}{B^2s^2}$, exactly the vertical-rails rod.</p>
<p><b>Rod on inclined rails.</b> Rails tilted at angle $\theta$ to the horizontal, field $B$ <i>vertical</i>. Only the component $B\cos\theta$ is perpendicular to the plane, so $\varepsilon=BLv\cos\theta$, the current is $I=BLv\cos\theta/R$, and the force $ILB$ is horizontal; its component along the slope is $ILB\cos\theta$. Terminal speed: $mg\sin\theta=\dfrac{B^2L^2v_t\cos^2\theta}{R}$. If instead $B$ is perpendicular to the incline, the cosines drop out: $mg\sin\theta=B^2L^2v_t/R$.</p>
<div class="box trap"><b>Trap:</b> "no emf" is not the same as "no motional emf in any part". When fully inside, the leading and trailing sides each have emf $Bsv$. They cancel round the loop, so net emf and current are zero.</div>`},

  {id:"l9", title:"Generators, motors and back emf", videos:[{title:"Search: AC generator rotating coil emf and torque",url:"https://www.youtube.com/results?search_query=AC+generator+rotating+coil+emf+NBA+omega+torque+back+emf+motor+AP+Physics+C",src:"YouTube search",note:"Look for the average power equals torque times angular speed check"}], html:String.raw`
<p><b>Generator.</b> A coil of $N$ turns and area $A$ rotates at angular speed $\omega$ in a uniform field. The angle between $\vec B$ and the coil's normal is $\theta=\omega t$:</p>
$$\Phi=NBA\cos\omega t,\qquad \varepsilon=-\frac{d\Phi}{dt}=NBA\omega\sin\omega t,\qquad \varepsilon_{\max}=NBA\omega$$
<p>The emf is zero when the flux is maximum (coil face-on to $\vec B$) and maximal when the flux is zero (coil edge-on, sides cutting field lines fastest). Connected to a resistive load $R$: $I=\varepsilon/R$ and $\bar P=\dfrac{\varepsilon_{\max}^2}{2R}$, because the average of $\sin^2$ is $\tfrac12$. Doubling the rotation rate doubles $\varepsilon_{\max}$ and quadruples the average power. The rms emf is $\varepsilon_{\max}/\sqrt2$.</p>
<p><b>Where the energy comes from.</b> A current in a coil in a field feels a torque $\tau=NIAB\sin\theta'$ ($\theta'$ the angle from $\vec B$ to the dipole moment direction). In a generator that torque is Lenz's law: it opposes the rotation. With $I=\varepsilon/R$, the opposing torque is $\tau=\dfrac{(NAB)^2\omega}{R}\sin^2\omega t$, and its average times $\omega$ is the electrical power:</p>
$$\bar\tau\,\omega=\frac{(NAB)^2\omega^2}{2R}=\frac{\varepsilon_{\max}^2}{2R}=\bar P_{\text{electrical}}$$
<p>Whoever turns the shaft (a turbine, a bicycle) supplies this mechanical power; it all becomes heat in the load. No energy is created.</p>
<p><b>Motor and back emf.</b> Run the machine in reverse: apply a source $\varepsilon_{\text{app}}$ to the coil or, in the simplest model, to a rod on rails. The moving conductor still generates a motional emf, called the <b>back emf</b> $\varepsilon_b$, which opposes the applied voltage:</p>
$$I=\frac{\varepsilon_{\text{app}}-\varepsilon_b}{R},\qquad \varepsilon_b=BLv\ (\text{rod})\ \text{ or }\ NBA\omega\ (\text{coil})$$
<p>At start-up $v=0$, there is no back emf, and the current $\varepsilon_{\text{app}}/R$ is largest; as the motor speeds up the current drops. With no load the speed rises until $\varepsilon_b=\varepsilon_{\text{app}}$ and the current vanishes: $v_{\max}=\varepsilon_{\text{app}}/(BL)$. With a load force $F_{\text{load}}$ the steady state needs $ILB=F_{\text{load}}$. Power bookkeeping: input $I\varepsilon_{\text{app}}$ = heat $I^2R$ + mechanical $I\varepsilon_b$ (equal to $F_{\text{load}}v$).</p>
<div class="box key">A motor and a generator are the same device. When it does work on a load, it is a motor and $\varepsilon_b$ opposes the source; when you force it to turn, it is a generator and its emf drives current. The back emf is what makes a motor draw less current as it speeds up, and a stalled motor burn out.</div>
<div class="box trap"><b>Trap:</b> in a generator the emf is maximum when the flux is zero. Flux $\propto\cos\omega t$, emf $\propto\sin\omega t$. Do not mix up the two when asked "when is the emf zero?"</div>`},

  {id:"l10", title:"RL circuits with several resistors", videos:[{title:"Lecture 20: Inductance, RL Circuits, Magnetic Field Energy (8.02, 2002)",url:"https://videolectures.net/mit802s02_electricity_magnetism",src:"Walter Lewin (MIT 8.02, course page)",note:"Pick Lecture 20 from the list; the RL circuit part"},{title:"Search: RL circuit with two resistors initial and final current",url:"https://www.youtube.com/results?search_query=RL+circuit+multiple+resistors+inductor+branch+initial+final+current+Thevenin+time+constant",src:"YouTube search",note:"Same method as capacitor branch circuits in e3"}], html:String.raw`
<p>Real AP circuits put an inductor in one branch of a network. The same two rules as for capacitors in e3 solve almost everything:</p>
<ul><li><b>Just after a switch changes ($t=0^+$):</b> an inductor keeps whatever current it had. If it carried none, treat it as an <b>open circuit</b> (a gap); if it carried $I_0$, treat it as a <b>current source</b> of $I_0$. Its voltage is whatever the rest of the circuit forces.</li>
<li><b>Long after ($t\to\infty$, all currents steady):</b> $dI/dt=0$, so the inductor has no voltage across it: treat it as a <b>plain wire</b> (of its own tiny resistance, if given).</li></ul>
<p><b>Time constant.</b> Remove the inductor and find the equivalent resistance $R_{\text{th}}$ seen by its terminals with the sources set to zero (batteries replaced by wires). Then $\tau=L/R_{\text{th}}$. More fully (Thévenin): the rest of the circuit acts like a battery $V_{\text{th}}$ (the open-circuit voltage at the inductor's terminals) in series with $R_{\text{th}}$, so</p>
$$L\frac{dI_L}{dt}+R_{\text{th}}I_L=V_{\text{th}}\ \Rightarrow\ I_L(t)=\frac{V_{\text{th}}}{R_{\text{th}}}\left(1-e^{-t/\tau}\right)\ \ (\text{if }I_L(0)=0)$$
<p>Other branch currents then follow from the loop and junction rules at any given time. Only the <i>inductor current</i> is continuous; the currents in the resistors can jump at $t=0$.</p>
<svg class="fig" viewBox="0 0 320 170" width="320" role="img" aria-label="Circuit: battery and switch in series with resistor R1, which feeds two parallel branches: resistor R2, and inductor L in series with resistor R3">
<polyline points="30,40 30,20 150,20" fill="none" stroke="currentColor" stroke-width="2"/><line x1="22" y1="40" x2="38" y2="40" stroke="currentColor" stroke-width="3"/><line x1="26" y1="50" x2="34" y2="50" stroke="currentColor" stroke-width="3"/><text x="42" y="48">ε</text>
<polyline points="30,50 30,140 270,140 270,20 230,20" fill="none" stroke="currentColor" stroke-width="2"/>
<polyline points="60,20 70,12" fill="none" stroke="currentColor" stroke-width="2"/><text x="52" y="38">switch</text>
<polyline points="150,20 160,14 168,26 176,14 184,26 192,14 200,20 230,20" fill="none" stroke="currentColor" stroke-width="2"/><text x="164" y="10">R1</text>
<line x1="215" y1="20" x2="215" y2="40" stroke="currentColor" stroke-width="2"/><line x1="215" y1="140" x2="215" y2="120" stroke="currentColor" stroke-width="2"/>
<polyline points="215,40 209,46 221,52 209,58 221,64 209,70 215,76 215,80" fill="none" stroke="currentColor" stroke-width="2"/><text x="225" y="62">R2</text>
<line x1="215" y1="20" x2="215" y2="20" stroke="currentColor"/>
<polyline points="270,20 270,40" fill="none" stroke="currentColor" stroke-width="2"/>
<path d="M270 45 q-9 5 0 10 q-9 5 0 10 q-9 5 0 10" fill="none" stroke="currentColor" stroke-width="2"/><text x="282" y="62">L</text>
<polyline points="270,75 270,85 264,89 276,95 264,101 276,107 270,111 270,140" fill="none" stroke="currentColor" stroke-width="2"/><text x="282" y="102">R3</text></svg>
<p><b>Opening the switch.</b> Suppose the circuit has reached steady state and a switch then interrupts the battery. The inductor current cannot drop to zero instantly, so it keeps flowing round whatever loop is still closed, through the resistors in that loop, and decays as $e^{-t/\tau'}$ with $\tau'=L/R_{\text{loop}}$. The initial voltage across those resistors is $I_0R_{\text{loop}}$, which can be many times the battery voltage and the opposite polarity. If the switch interrupts the only path for the current, the voltage across the opening gap rises until it sparks: that is the spark in a light switch or a car's ignition coil.</p>
<div class="box key">Checklist for any RL network: (1) find $I_L(0^+)$; (2) find the steady state with $L\to$ wire; (3) $\tau=L/R_{\text{th}}$; (4) write $I(t)=I_\infty+(I_0-I_\infty)e^{-t/\tau}$ for any <i>continuous</i> current (the inductor's); (5) get other currents from the loop rule.</div>
<div class="box trap"><b>Trap:</b> the time constant is $L$ over the resistance <i>seen by the inductor</i> with sources off, not simply $L/R$ of the resistor next to it, and not the total resistance of the circuit seen by the battery.</div>`},

  {id:"l11", extra:true, title:"Eddy currents, transformers and other inductances", videos:[{title:"Search: eddy currents magnet falling through copper tube",url:"https://www.youtube.com/results?search_query=magnet+falling+through+copper+tube+eddy+currents+explained",src:"YouTube search",note:"Demonstration of magnetic braking"},{title:"Search: ideal transformer turns ratio mutual inductance",url:"https://www.youtube.com/results?search_query=ideal+transformer+turns+ratio+mutual+inductance+explained+physics",src:"YouTube search",note:"Then compare with the formulas below"}], html:String.raw`
<p><b>Eddy currents.</b> A changing flux induces emf in any conductor, not just in wire loops. In a solid piece of metal the emf drives swirling currents (eddies) in closed paths. By Lenz's law they oppose whatever caused them: a magnet dropped down a copper tube falls slowly because eddy currents in the tube create a field that pushes up on it (a magnet falling in a plastic tube of the same size just falls). The magnetic force grows with the magnet's speed, so the magnet reaches a terminal speed, exactly the sliding-rod ODE. The lost gravitational energy becomes heat in the tube. The same effect brakes trains and roller coasters (magnets passing metal fins) and powers induction cooktops (a rapidly oscillating field heats the pan). Transformer cores are made of thin insulated laminations to cut eddy-current heating.</p>
<p><b>Mutual inductance, quantitatively.</b> Wind a coil of $N_2$ turns around the middle of a long solenoid (length $\ell$, area $A$, $N_1$ turns). The solenoid's field $\mu_0(N_1/\ell)I_1$ passes through every turn of the second coil, so $N_2\Phi=N_2\mu_0\dfrac{N_1}{\ell}I_1A$ and</p>
$$M=\frac{\mu_0N_1N_2A}{\ell},\qquad \varepsilon_2=-M\frac{dI_1}{dt}$$
<p><b>Ideal transformer.</b> Two coils wound on one iron core, so all the flux $\Phi$ links every turn of both. Then $V_1\approx N_1\,d\Phi/dt$ and $V_2=N_2\,d\Phi/dt$, so</p>
$$\frac{V_2}{V_1}=\frac{N_2}{N_1},\qquad V_1I_1=V_2I_2\ (\text{no losses})\Rightarrow\frac{I_2}{I_1}=\frac{N_1}{N_2}$$
<p>It works only with changing current (AC): DC makes constant flux and no secondary emf. Stepping the voltage up for long-distance lines lowers the current and so the $I^2R$ loss.</p>
<p><b>Other inductances.</b> Method: put current $I$ in, find $B$ with Ampère's law, compute the flux linkage $N\Phi$ (or the energy $U=\int u_B\,dV$), then $L=N\Phi/I=2U/I^2$.</p>
<ul><li><b>Toroid</b> (rectangular cross-section of height $h$, inner radius $a$, outer radius $b$, $N$ turns): $B=\dfrac{\mu_0NI}{2\pi r}$, $\Phi=\dfrac{\mu_0NIh}{2\pi}\ln\dfrac ba$, so $L=\dfrac{\mu_0N^2h}{2\pi}\ln\dfrac ba$.</li>
<li><b>Coaxial cable</b> (inner radius $a$, outer $b$, length $\ell$): $B=\dfrac{\mu_0I}{2\pi r}$ between the conductors, $U=\int_a^b\dfrac{B^2}{2\mu_0}(2\pi r\ell)\,dr=\dfrac{\mu_0I^2\ell}{4\pi}\ln\dfrac ba$, so $L=\dfrac{\mu_0\ell}{2\pi}\ln\dfrac ba$, or $\dfrac{\mu_0}{2\pi}\ln\dfrac ba$ per metre.</li></ul>`},

  {id:"l12", extra:true, title:"Damped RLC, quality factor, and AC circuits", videos:[{title:"Search: series RLC circuit driven AC impedance resonance",url:"https://www.youtube.com/results?search_query=series+RLC+circuit+AC+impedance+resonance+phasors+physics",src:"YouTube search",note:"Compare with the driven damped oscillator from Mechanics"}], html:String.raw`
<p><b>Quality factor.</b> In the damped oscillator $L\ddot q+R\dot q+q/C=0$, the charge amplitude decays as $e^{-Rt/2L}$ and the stored energy as $e^{-Rt/L}$. The <b>quality factor</b> $Q=\dfrac{\omega_0L}{R}=\dfrac1R\sqrt{\dfrac LC}$ measures how many oscillations occur before the energy dies (large $Q$ = lightly damped; the fraction of energy lost per cycle is about $2\pi/Q$). Same as a mass on a spring with $m\leftrightarrow L$, $b\leftrightarrow R$, $k\leftrightarrow1/C$.</p>
<p><b>AC source.</b> Drive a series circuit with $\varepsilon_0\cos\omega t$: $L\ddot q+R\dot q+q/C=\varepsilon_0\cos\omega t$, the driven oscillator of mechanics. After the transient dies, the current is sinusoidal at the drive frequency: $I=I_0\cos(\omega t-\phi)$ with</p>
$$I_0=\frac{\varepsilon_0}{Z},\quad Z=\sqrt{R^2+(X_L-X_C)^2},\quad X_L=\omega L,\ X_C=\frac1{\omega C},\quad \tan\phi=\frac{X_L-X_C}{R}$$
<p>The <b>reactances</b> are the "resistance" of an inductor and a capacitor to AC. Across a resistor, voltage and current are in phase; across an inductor the voltage <i>leads</i> the current by $90^\circ$ ($V_L=L\,dI/dt$); across a capacitor the voltage <i>lags</i> by $90^\circ$. The resistor dissipates average power $\tfrac12I_0^2R=I_{\text{rms}}^2R$, where $I_{\text{rms}}=I_0/\sqrt2$; ideal $L$ and $C$ dissipate none. </p>
<p><b>Resonance.</b> $|Z|$ is smallest and $I_0$ largest when $X_L=X_C$, i.e. $\omega=\omega_0=1/\sqrt{LC}$, where $Z=R$ and the current is in phase with the source. The peak is sharper (narrower) for larger $Q$. A radio tuner varies $C$ to pick one station.</p>
<div class="box trap"><b>Trap:</b> wall voltages ("120 V") are rms values; the peak is $120\sqrt2=170$ V. And $\tfrac12 I_0^2R$, not $I_0^2R$, is the average power.</div>`}
  ],
  examples:[
  {id:"x1", title:"Faraday with a decaying field", problem:String.raw`<p>A circular loop of radius $5.0$ cm and resistance $0.20\ \Omega$ lies in the page. A uniform field perpendicular to the page and directed <i>into</i> it is $B(t)=0.40e^{-t/2.0}$ T ($t$ in seconds). Find the emf and current at $t=0$ and their direction, and the current at $t=2.0$ s.</p>`,
   solution:String.raw`<p>$A=\pi(0.050)^2=7.85\times10^{-3}$ m². $\Phi=AB(t)$, so $\varepsilon=-\dfrac{d\Phi}{dt}$ with magnitude $A\left|\dfrac{dB}{dt}\right|=A\dfrac{0.40}{2.0}e^{-t/2}$.</p>
<p>At $t=0$: $|\varepsilon|=(7.85\times10^{-3})(0.20)=1.57\times10^{-3}$ V, so $I=\varepsilon/R=7.9\times10^{-3}$ A $=7.9$ mA.</p>
<p>Direction: $B$ into the page is <i>decreasing</i>, so the induced field must also point into the page, to replace the lost flux. Fingers curling clockwise (viewed from the front) give thumb into the page, so the current is <b>clockwise</b>.</p>
<p>At $t=2.0$ s the factor $e^{-1}=0.368$: $I=7.9\ \text{mA}\times0.368=2.9$ mA, same direction.</p>`},
  {id:"x2", title:"Rod pulled on rails: terminal speed", problem:String.raw`<p>A $0.20$ kg rod of length $0.50$ m slides without friction on horizontal rails connected by a $2.0\ \Omega$ resistor, in a uniform field $B=0.80$ T perpendicular to the plane. A constant horizontal force of $0.50$ N pulls the rod from rest. Find (a) the terminal speed, (b) the time constant and the time to reach half of the terminal speed, and (c) the current and the dissipated power at terminal speed.</p>`,
   solution:String.raw`<p>$B^2L^2=(0.64)(0.25)=0.16$ T²m².</p>
<p>(a) At terminal speed $F=ILB=B^2L^2v_t/R$, so $v_t=\dfrac{FR}{B^2L^2}=\dfrac{(0.50)(2.0)}{0.16}=6.25$ m/s.</p>
<p>(b) $m\dot v=F-\dfrac{B^2L^2}{R}v$ gives $v=v_t(1-e^{-t/\tau})$ with $\tau=\dfrac{mR}{B^2L^2}=\dfrac{(0.20)(2.0)}{0.16}=2.5$ s. Half of $v_t$: $e^{-t/\tau}=\tfrac12$, $t=\tau\ln2=1.7$ s.</p>
<p>(c) $I=\dfrac{BLv_t}{R}=\dfrac{(0.80)(0.50)(6.25)}{2.0}=1.25$ A. Power $I^2R=(1.25)^2(2.0)=3.1$ W, which equals $Fv_t=(0.50)(6.25)=3.1$ W ✓ (all the input power becomes heat).</p>`},
  {id:"x3", title:"Inductance and energy of a solenoid", problem:String.raw`<p>A solenoid has $1000$ turns, length $0.50$ m and radius $2.0$ cm. (a) Find its inductance. (b) It carries $3.0$ A. Find the stored energy two ways: with $\tfrac12LI^2$ and with $u_B\times$ volume. (c) If the current is brought from 3.0 A to zero uniformly in $2.0$ ms, what is the average emf magnitude?</p>`,
   solution:String.raw`<p>(a) $L=\dfrac{\mu_0N^2A}{\ell}=\dfrac{(4\pi\times10^{-7})(10^6)\,\pi(0.020)^2}{0.50}=3.16\times10^{-3}$ H $=3.2$ mH.</p>
<p>(b) $U=\tfrac12LI^2=\tfrac12(3.16\times10^{-3})(9.0)=1.42\times10^{-2}$ J. Check: $B=\mu_0nI=(4\pi\times10^{-7})(2000)(3.0)=7.54\times10^{-3}$ T, $u_B=B^2/2\mu_0=22.6$ J/m³, volume $=\pi(0.020)^2(0.50)=6.28\times10^{-4}$ m³, product $=1.42\times10^{-2}$ J ✓.</p>
<p>(c) $|\varepsilon|=L\left|\dfrac{\Delta I}{\Delta t}\right|=(3.16\times10^{-3})\dfrac{3.0}{2.0\times10^{-3}}=4.7$ V.</p>`},
  {id:"x4", title:"LR circuit", problem:String.raw`<p>A $12$ V battery, a $20\ \Omega$ resistor and a $0.50$ H inductor are in series with a switch, closed at $t=0$. Find (a) the time constant and the final current, (b) the initial $dI/dt$, (c) the time at which the current is $0.40$ A, and (d) the voltage across the inductor at that time.</p>`,
   solution:String.raw`<p>(a) $\tau=L/R=0.50/20=0.025$ s; $I_\infty=\varepsilon/R=0.60$ A.</p>
<p>(b) At $t=0$, $I=0$ so the whole $12$ V is across $L$: $dI/dt=\varepsilon/L=24$ A/s.</p>
<p>(c) $0.40=0.60(1-e^{-t/\tau})\Rightarrow e^{-t/\tau}=\tfrac13\Rightarrow t=\tau\ln3=0.0275$ s $\approx27$ ms.</p>
<p>(d) $V_L=\varepsilon-IR=12-(0.40)(20)=4.0$ V (also $\varepsilon e^{-t/\tau}=12/3=4.0$ V ✓).</p>`},
  {id:"x5", title:"LC oscillation", problem:String.raw`<p>A $2.0\ \mu$F capacitor holding $40\ \mu$C is connected across a $50$ mH inductor at $t=0$. Ignore resistance. Find the angular frequency and period, the maximum current, and the energy stored at $t=0$. How much energy is in the capacitor when the current is at half its maximum?</p>`,
   solution:String.raw`<p>$\omega=1/\sqrt{LC}=1/\sqrt{(0.050)(2.0\times10^{-6})}=3.16\times10^3$ rad/s; $T=2\pi/\omega=1.99\times10^{-3}$ s $\approx2.0$ ms.</p>
<p>$I_{\max}=\omega Q_0=(3162)(40\times10^{-6})=0.126$ A.</p>
<p>$U_0=Q_0^2/2C=(40\times10^{-6})^2/(4.0\times10^{-6})=4.0\times10^{-4}$ J. Check: $\tfrac12LI_{\max}^2=\tfrac12(0.050)(0.0160)=4.0\times10^{-4}$ J ✓.</p>
<p>At $I=I_{\max}/2$, $U_L=\tfrac14U_0$ (energy goes as $I^2$), so $U_C=\tfrac34U_0=3.0\times10^{-4}$ J.</p>`},
  {id:"x6", title:"Loop near a long straight wire", problem:String.raw`<p>A long straight wire carries a current $I$ upward. A rectangular loop of resistance $0.50\ \Omega$ lies in the same plane to its right: sides of length $\ell=0.40$ m parallel to the wire, near side at $d=0.10$ m and far side at $d+a=0.30$ m. (a) Find the flux through the loop when $I=50$ A. (b) Find the mutual inductance. If $I$ rises uniformly at $2.0\times10^4$ A/s, find the induced emf, current and its direction. (c) Now $I$ is held at $50$ A and the loop is pulled directly away at $2.0$ m/s. Find the emf at the instant $d=0.10$ m, and its direction.</p>`,
   solution:String.raw`<p>(a) Strip of width $dr$: $d\Phi=\dfrac{\mu_0I}{2\pi r}\ell\,dr$. So $\Phi=\dfrac{\mu_0I\ell}{2\pi}\ln\dfrac{d+a}{d}=(2\times10^{-7})(50)(0.40)\ln3=4.39\times10^{-6}$ Wb.</p>
<p>(b) $M=\Phi/I=8.79\times10^{-8}$ H. $|\varepsilon|=M\,dI/dt=(8.79\times10^{-8})(2.0\times10^4)=1.76\times10^{-3}$ V; $I_{\text{loop}}=\varepsilon/R=3.5$ mA. The field at the loop is into the page and increasing, so the induced current is <b>counterclockwise</b>.</p>
<p>(c) $|\varepsilon|=\dfrac{\mu_0I\ell v}{2\pi}\left(\dfrac1d-\dfrac1{d+a}\right)=(2\times10^{-7})(50)(0.40)(2.0)(10-3.33)=5.3\times10^{-5}$ V $=53\ \mu$V. Flux into the page is decreasing, so the induced current is <b>clockwise</b> (the near side, in the stronger field, dominates).</p>`},
  {id:"x7", title:"Square loop crossing a field region", problem:String.raw`<p>A square loop of side $0.20$ m and resistance $0.50\ \Omega$ is pulled at constant speed $2.0$ m/s through a region $0.60$ m wide containing a uniform field of $0.50$ T into the page. At $t=0$ the leading edge reaches the region. Find the time intervals of the three stages; the emf, current and direction in each; the force needed to keep the speed constant; the maximum flux; and the total energy dissipated.</p>`,
   solution:String.raw`<p>Entering: the leading edge travels $0.20$ m, $t=0$ to $0.10$ s. Fully inside: $0.10$ to $0.30$ s (the leading edge reaches the far boundary at $0.60/2.0=0.30$ s). Leaving: $0.30$ to $0.40$ s.</p>
<p>Entering: $\varepsilon=Bsv=(0.50)(0.20)(2.0)=0.20$ V, $I=0.40$ A, counterclockwise (flux into the page rising). $F=IsB=(0.40)(0.20)(0.50)=0.040$ N against the motion, so the puller applies $0.040$ N forward; $P=I^2R=0.080$ W.</p>
<p>Inside: $\varepsilon=0$, $I=0$, $F=0$. Leaving: $\varepsilon=0.20$ V, $I=0.40$ A <b>clockwise</b>, applied force $0.040$ N forward again (the magnetic force opposes the motion in both stages).</p>
<p>Maximum flux $=Bs^2=(0.50)(0.040)=0.020$ Wb. Energy: $Q=2(0.080\ \text{W})(0.10\ \text{s})=0.016$ J $=F\cdot(2s)=(0.040)(0.40)$ ✓.</p>`},
  {id:"x8", title:"Generator: emf, power and torque", problem:String.raw`<p>A generator coil has $N=100$ turns of area $0.020$ m$^2$ and rotates at $60$ Hz in a uniform $0.30$ T field. It drives a $40\ \Omega$ resistor. Find the peak and rms emf, the peak current, the average power, and the average and peak torque the shaft must supply.</p>`,
   solution:String.raw`<p>$\omega=2\pi(60)=377$ rad/s. $\varepsilon_{\max}=NBA\omega=(100)(0.30)(0.020)(377)=226$ V; $\varepsilon_{\text{rms}}=226/\sqrt2=160$ V.</p>
<p>$I_{\max}=226/40=5.65$ A. $\bar P=\varepsilon_{\max}^2/2R=640$ W (equivalently $\varepsilon_{\text{rms}}^2/R$).</p>
<p>Torque $\tau=NIAB\sin\omega t$ at the instant of peak current: $\tau_{\max}=(100)(5.65)(0.020)(0.30)=3.39$ N·m. The torque goes as $\sin^2\omega t$, so the average is half of that, $1.70$ N·m. Check: $\bar\tau\omega=(1.70)(377)=640$ W ✓.</p>`},
  {id:"x9", title:"Rod with a battery: a simple motor", problem:String.raw`<p>A rod of length $0.40$ m on frictionless horizontal rails is connected through the rails to a $12$ V battery; total resistance $2.0\ \Omega$. A uniform field of $0.50$ T is perpendicular to the plane. (a) Find the current and force at the moment of release from rest. (b) Find the top speed with no load. (c) The rod now pulls a steady load force of $0.30$ N. Find its steady speed and the power input, heat and mechanical power.</p>`,
   solution:String.raw`<p>(a) No back emf at $v=0$: $I=12/2.0=6.0$ A, $F=ILB=(6.0)(0.40)(0.50)=1.2$ N.</p>
<p>(b) With no load the rod accelerates until $I=0$, i.e. back emf $BLv=12$ V: $v=12/(0.50\cdot0.40)=60$ m/s.</p>
<p>(c) Steady: $ILB=0.30\Rightarrow I=1.5$ A. Then $\varepsilon_b=12-IR=9.0$ V, $v=9.0/(BL)=45$ m/s. Input $=I\varepsilon=18$ W; heat $I^2R=4.5$ W; mechanical $I\varepsilon_b=13.5$ W $=Fv=(0.30)(45)$ ✓.</p>`},
  {id:"x10", title:"RL circuit with an inductor in a branch", problem:String.raw`<p>A $12$ V battery with a switch is in series with $R_1=4.0\ \Omega$; this feeds two parallel branches: $R_2=12\ \Omega$, and an ideal inductor $L=0.60$ H (no resistance). The switch is closed at $t=0$ with no initial current. Find (a) the battery current and $V_L$ just after closing, (b) the final current in the inductor, (c) the time constant and $I_L(t)$, and the battery current at $t=\tau$. (d) After steady state, the switch is opened. Find the current and voltage across $R_2$ immediately after, the time constant, and the heat dissipated in $R_2$.</p>`,
   solution:String.raw`<p>(a) $I_L(0^+)=0$: inductor open, so $I_{\text{batt}}=12/(4+12)=0.75$ A, all through $R_2$. Voltage across the parallel pair $=(0.75)(12)=9.0$ V, which is $V_L$ at $t=0^+$.</p>
<p>(b) At $t\to\infty$ the inductor is a wire shorting $R_2$: $I_L=12/4.0=3.0$ A.</p>
<p>(c) With the inductor removed: $R_{\text{th}}=R_1\parallel R_2=3.0\ \Omega$, $V_{\text{th}}=12\cdot12/16=9.0$ V. $\tau=L/R_{\text{th}}=0.60/3.0=0.20$ s; $I_L=3.0(1-e^{-t/0.20})$ A. At $t=\tau$: $I_L=1.90$ A, $V_L=9.0e^{-1}=3.31$ V, so $I_{R_2}=3.31/12=0.276$ A and the battery supplies $1.90+0.28=2.17$ A (check: $12-4(2.17)=3.31$ V ✓).</p>
<p>(d) The inductor still carries $3.0$ A, now only through the loop $L$-$R_2$ (the battery branch is open). Current in $R_2$ is $3.0$ A (direction reversed from before), voltage $(3.0)(12)=36$ V, three times the battery. $\tau'=L/R_2=0.60/12=0.050$ s. Heat $=\tfrac12LI^2=\tfrac12(0.60)(9.0)=2.7$ J.</p>`},
  {id:"x11", title:"Mutual inductance, toroid and coax", problem:String.raw`<p>(a) A $200$-turn coil is wound tightly around the middle of a solenoid with $1000$ turns, length $0.50$ m and radius $2.0$ cm. Find $M$, and the emf in the outer coil when the solenoid current changes at $50$ A/s. (b) A toroid has $500$ turns, rectangular cross-section of height $2.0$ cm, inner radius $4.0$ cm and outer radius $6.0$ cm. Find $L$. (c) Find the inductance per metre of a coaxial cable with $b/a=3$.</p>`,
   solution:String.raw`<p>(a) $M=\dfrac{\mu_0N_1N_2A}{\ell}=\dfrac{(4\pi\times10^{-7})(1000)(200)\pi(0.020)^2}{0.50}=6.32\times10^{-4}$ H. $|\varepsilon_2|=M\,dI/dt=(6.32\times10^{-4})(50)=3.2\times10^{-2}$ V.</p>
<p>(b) $L=\dfrac{\mu_0N^2h}{2\pi}\ln\dfrac ba=(2\times10^{-7})(500)^2(0.020)\ln1.5=4.05\times10^{-4}$ H.</p>
<p>(c) $L/\ell=\dfrac{\mu_0}{2\pi}\ln3=(2\times10^{-7})(1.0986)=2.2\times10^{-7}$ H/m.</p>`}
  ],
  mcq:[
  {id:"q1", q:String.raw`<p>A flat loop of area $0.040$ m² sits in a uniform $0.50$ T field. The normal to the loop makes an angle of $60^\circ$ with the field. The magnetic flux through the loop is</p>`, choices:["$5.0\\times10^{-3}$ Wb","$1.0\\times10^{-2}$ Wb","$1.7\\times10^{-2}$ Wb","$2.0\\times10^{-2}$ Wb","zero"], a:1,
   why:String.raw`<p>$\Phi=BA\cos60^\circ=(0.50)(0.040)(0.50)=1.0\times10^{-2}$ Wb. Using $\sin60^\circ$ (measuring the angle from the plane instead of from the normal) gives $1.7\times10^{-2}$ Wb.</p>`},
  {id:"q2", q:String.raw`<p>A coil with 5 turns, each of area $0.020$ m², is perpendicular to a uniform field that grows as $B=3.0t$ (T, $t$ in seconds). The magnitude of the induced emf is</p>`, choices:["$0.060$ V","$0.12$ V","$0.20$ V","$0.30$ V","$0.60$ V"], a:3,
   why:String.raw`<p>$|\varepsilon|=N\,A\,dB/dt=(5)(0.020)(3.0)=0.30$ V. Leaving out $N$ gives $0.060$ V.</p>`},
  {id:"q3", q:String.raw`<p>The north pole of a bar magnet is moved straight down toward a horizontal circular loop of wire, from above. Viewed from above, the induced current in the loop is</p>`, choices:["clockwise","counterclockwise","zero, since the magnet is not touching the loop","first clockwise, then counterclockwise","clockwise only if the loop's resistance is small"], a:1,
   why:String.raw`<p>Field lines leave the north pole, so at the loop $\vec B$ points down and the downward flux increases. The induced field must point up; thumb up means counterclockwise as seen from above. No contact is needed; the emf arises from changing flux.</p>`},
  {id:"q4", q:String.raw`<p>A rectangular loop moves at constant velocity, staying entirely within a region of uniform magnetic field perpendicular to the loop's plane. The current in the loop is</p>`, choices:["zero, because the flux through the loop is constant","nonzero, because each side has a motional emf","nonzero and constant, directed to oppose the motion","nonzero, decreasing with time","zero only if the loop's resistance is large"], a:0,
   why:String.raw`<p>The flux $BA$ through the loop does not change, so $\varepsilon=-d\Phi/dt=0$. The leading and trailing sides do each have a motional emf $BLv$, but they push around the loop in opposite senses and cancel; no current flows.</p>`},
  {id:"q5", q:String.raw`<p>A $0.40$ m rod moves at $3.0$ m/s perpendicular to its length and to a uniform $0.50$ T field. The emf between its ends is</p>`, choices:["$0.15$ V","$0.60$ V","$1.2$ V","$6.0$ V","zero"], a:1,
   why:String.raw`<p>$\varepsilon=BLv=(0.50)(0.40)(3.0)=0.60$ V.</p>`},
  {id:"q6", q:String.raw`<p>The rod in the previous situation ($L=0.40$ m, $v=3.0$ m/s, $B=0.50$ T) slides on rails connected by a $0.30\ \Omega$ resistor. The magnetic force on the rod is closest to</p>`, choices:["$0.12$ N","$0.20$ N","$0.40$ N","$0.60$ N","$2.0$ N"], a:2,
   why:String.raw`<p>$I=BLv/R=0.60/0.30=2.0$ A, $F=ILB=(2.0)(0.40)(0.50)=0.40$ N, directed against the velocity. The $2.0$ N option is the current, and $0.60$ is the emf.</p>`},
  {id:"q7", q:String.raw`<p>A rod falls on vertical, frictionless, conducting rails connected at the bottom by a resistor, in a horizontal uniform field perpendicular to the rail plane. It reaches a terminal speed $v_t$. If the resistance of the resistor is doubled and nothing else changes, the new terminal speed is</p>`, choices:["$v_t/2$","$v_t$","$2v_t$","$4v_t$","$v_t/4$"], a:2,
   why:String.raw`<p>At terminal speed $mg=B^2L^2v_t/R$, so $v_t=mgR/(B^2L^2)\propto R$. Doubling $R$ halves the current at a given speed, so the rod must go twice as fast to be braked enough to balance gravity.</p>`},
  {id:"q8", q:String.raw`<p>The current through a $0.20$ H inductor rises uniformly from $0$ to $3.0$ A in $0.10$ s. The magnitude of the emf across the inductor during this time is</p>`, choices:["$0.060$ V","$0.60$ V","$1.5$ V","$6.0$ V","$60$ V"], a:3,
   why:String.raw`<p>$|\varepsilon|=L\,dI/dt=(0.20)(3.0/0.10)=6.0$ V.</p>`},
  {id:"q9", q:String.raw`<p>The energy stored in a $0.40$ H inductor carrying $5.0$ A is</p>`, choices:["$1.0$ J","$2.0$ J","$5.0$ J","$10$ J","$50$ J"], a:2,
   why:String.raw`<p>$U=\tfrac12LI^2=\tfrac12(0.40)(25)=5.0$ J. Forgetting the $\tfrac12$ gives $10$ J.</p>`},
  {id:"q10", q:String.raw`<p>A battery $\varepsilon$, resistor $R$ and inductor $L$ are in series and the switch is closed at $t=0$. Just after closing, the current and the voltage across the inductor are</p>`, choices:["$I=\\varepsilon/R$ and $V_L=0$","$I=0$ and $V_L=\\varepsilon$","$I=0$ and $V_L=0$","$I=\\varepsilon/R$ and $V_L=\\varepsilon$","$I=\\varepsilon/2R$ and $V_L=\\varepsilon/2$"], a:1,
   why:String.raw`<p>The current through an inductor cannot change instantly, so $I=0$. Then there is no drop across $R$ and the loop rule puts the full $\varepsilon$ across $L$. The first choice describes the circuit at long times.</p>`},
  {id:"q11", q:String.raw`<p>An inductor $L=0.30$ H and resistor $R=15\ \Omega$ form a closed loop carrying an initial current $I_0$ with no battery. After $0.040$ s the current is</p>`, choices:["$0.50\\,I_0$","$0.37\\,I_0$","$0.14\\,I_0$","$0.050\\,I_0$","$0.018\\,I_0$"], a:2,
   why:String.raw`<p>$\tau=L/R=0.020$ s, so after $0.040=2\tau$: $I=I_0e^{-2}=0.135I_0$. The choice $0.37$ is the value after one time constant.</p>`},
  {id:"q12", q:String.raw`<p>An ideal LC circuit has $L=4.0$ mH and $C=1.0\ \mu$F. Its angular frequency of oscillation is closest to</p>`, choices:["$1.6\\times10^4$ rad/s","$2.5\\times10^3$ rad/s","$6.3\\times10^{-5}$ rad/s","$2.5\\times10^8$ rad/s","$4.0\\times10^3$ rad/s"], a:0,
   why:String.raw`<p>$\omega=1/\sqrt{LC}=1/\sqrt{(4.0\times10^{-3})(10^{-6})}=1.58\times10^4$ rad/s. The $2.5\times10^3$ is the frequency in Hz ($\omega/2\pi$), and $6.3\times10^{-5}$ is $\sqrt{LC}$, which has units of seconds.</p>`},
  {id:"q13", q:String.raw`<p>In an ideal LC circuit the capacitance is quadrupled while $L$ is held fixed. The period of oscillation</p>`, choices:["is unchanged","is halved","doubles","quadruples","is quartered"], a:2,
   why:String.raw`<p>$T=2\pi\sqrt{LC}\propto\sqrt C$, so quadrupling $C$ doubles $T$. (Mechanical analogy: a softer spring, $k\propto1/C$, gives a longer period.)</p>`},
  {id:"q14", q:String.raw`<p>A capacitor is being charged so that the electric flux between its plates is increasing. A circular loop is drawn in the gap between the plates (no wire or conduction current passes through it). A circulating magnetic field around the loop is explained by</p>`, choices:["Gauss's law for electric fields","Gauss's law for magnetic fields","Faraday's law","the Ampère-Maxwell law (displacement current)","Lenz's law applied to the plates"], a:3,
   why:String.raw`<p>With no conduction current, the circulation of $\vec B$ comes from the $\mu_0\varepsilon_0\,d\Phi_E/dt$ term of the Ampère-Maxwell law. Faraday's law is the opposite pairing: changing $B$ flux gives circulating $E$.</p>`},
  {id:"q15", q:String.raw`<p>A coil of 50 turns, each of area $0.040$ m$^2$, rotates at $10$ Hz about a diameter in a uniform $0.20$ T field. The peak emf is closest to</p>`, choices:["$0.40$ V","$4.0$ V","$25$ V","$160$ V","$250$ V"], a:2,
   why:String.raw`<p>$\varepsilon_{\max}=NBA\omega=(50)(0.20)(0.040)(2\pi\cdot10)=25$ V. Using $\omega=10$ rad/s (treating the frequency as an angular speed) gives $4.0$ V.</p>`},
  {id:"q16", q:String.raw`<p>A generator coil drives a fixed resistor. If the rotation rate is doubled with everything else unchanged, the average power dissipated in the resistor</p>`, choices:["is unchanged","doubles","quadruples","increases by a factor of 8","increases by a factor of $\\sqrt2$"], a:2,
   why:String.raw`<p>$\varepsilon_{\max}\propto\omega$, and $\bar P=\varepsilon_{\max}^2/2R\propto\omega^2$. Doubling $\omega$ doubles the emf but quadruples the power; the shaft torque doubles too, and torque times angular speed gives the same factor 4.</p>`},
  {id:"q17", q:String.raw`<p>A long vertical wire carries a current upward that is increasing in time. A rectangular loop in the same plane lies to the right of the wire. The induced current in the loop is</p>`, choices:["clockwise, and the loop is attracted toward the wire","counterclockwise, and the loop is attracted toward the wire","clockwise, and the loop is repelled from the wire","counterclockwise, and the loop is repelled from the wire","zero, because the loop does not enclose the wire"], a:3,
   why:String.raw`<p>To the right of an upward current $\vec B$ is into the page and growing, so the induced current is counterclockwise. Its near side carries current opposite to the wire's current, and the near side is in the stronger field, so the net force is repulsive (the loop is pushed to reduce the flux). Enclosing the wire is not required; only flux through the loop's area matters.</p>`},
  {id:"q18", q:String.raw`<p>A uniform field fills a cylinder of radius $0.050$ m, and increases at $0.20$ T/s. The magnitude of the induced electric field at a point $0.10$ m from the axis (outside the cylinder), in V/m, is</p>`, choices:["zero, because there is no magnetic field outside the cylinder","$2.5\\times10^{-3}$","$5.0\\times10^{-3}$","$1.0\\times10^{-2}$","$2.0\\times10^{-1}$"], a:1,
   why:String.raw`<p>$E(2\pi r)=\pi R^2\,dB/dt$, so $E=\dfrac{R^2}{2r}\dfrac{dB}{dt}=\dfrac{(0.050)^2}{2(0.10)}(0.20)=2.5\times10^{-3}$ V/m. The flux that matters is that through the whole circle of radius $r$, which is only the part inside $R$. $E$ is not zero outside the field region. Using $r$ instead of $R$ for the area gives the wrong value $1.0\times10^{-2}$.</p>`},
  {id:"q19", q:String.raw`<p>A square loop of side $0.10$ m moves at $3.0$ m/s straight through a region of uniform field $0.30$ m wide (loop fully inside it for part of the trip). For how long is the induced emf zero between the entering and leaving stages?</p>`, choices:["$0.033$ s","$0.067$ s","$0.10$ s","$0.13$ s","the emf is never zero"], a:1,
   why:String.raw`<p>Entering ends when the trailing edge enters, at $s/v=0.033$ s; leaving begins when the leading edge reaches the far boundary, at $w/v=0.10$ s. The gap is $(w-s)/v=0.067$ s. Using $w/v$ alone ($0.10$ s) forgets the entry time.</p>`},
  {id:"q20", q:String.raw`<p>A strong magnet is dropped down a vertical copper tube and, separately, a vertical plastic tube of the same size. Compared with the plastic tube, in the copper tube the magnet</p>`, choices:["falls the same way, since copper is not magnetic","falls more slowly, because eddy currents in the copper exert an upward force on it","falls faster, because the copper is attracted to the magnet","falls more slowly, because the copper attracts the magnet statically and holds it","gains kinetic energy beyond $mgh$"], a:1,
   why:String.raw`<p>The moving magnet changes the flux through the copper, inducing eddy currents whose fields oppose the motion (Lenz); the force grows with speed until it balances gravity, a terminal speed. Energy lost goes to heat. Copper is not ferromagnetic, but it still has induced currents; there is no static attraction.</p>`},
  {id:"q21", q:String.raw`<p>A $20$ V battery and switch are in series with $R_1=10\ \Omega$; this feeds a parallel pair: $R_2=30\ \Omega$, and an ideal inductor. With the switch closed for a very long time, the battery current is</p>`, choices:["$0.50$ A","$0.67$ A","$1.0$ A","$2.0$ A","$2.7$ A"], a:3,
   why:String.raw`<p>In steady state the ideal inductor is a wire and shorts $R_2$, leaving only $R_1$: $I=20/10=2.0$ A. The value $0.50$ A, $20/(10+30)$, is the current just after closing, when the inductor acts as an open circuit.</p>`},
  {id:"q22", q:String.raw`<p>An ideal $0.50$ H inductor carries $2.0$ A through a loop that includes a $50\ \Omega$ resistor when a battery in a different branch is disconnected. The voltage across the resistor immediately afterwards has magnitude</p>`, choices:["$0$","$1.0$ V","$25$ V","$100$ V","infinite"], a:3,
   why:String.raw`<p>The inductor current is continuous, so $2.0$ A flows through $50\ \Omega$: $V=100$ V. It is the current that is continuous, not the voltage; the resistor's voltage jumps from whatever it was to $100$ V.</p>`},
  {id:"q23", q:String.raw`<p>A motor with coil resistance $2.0\ \Omega$ is connected to $12$ V and, once running at steady speed, draws $1.0$ A. The back emf is</p>`, choices:["$2.0$ V","$6.0$ V","$10$ V","$12$ V","$14$ V"], a:2,
   why:String.raw`<p>$I=(\varepsilon-\varepsilon_b)/R\Rightarrow\varepsilon_b=12-(1.0)(2.0)=10$ V. Starting from rest the current would be $12/2.0=6.0$ A; the back emf is what limits it.</p>`},
  {id:"q24", q:String.raw`<p>An ideal transformer has 500 turns in the primary and 50 in the secondary, and the primary is connected to $120$ V rms AC. The secondary delivers $3.0$ A. The primary current is</p>`, choices:["$0.030$ A","$0.30$ A","$3.0$ A","$30$ A","zero, since a transformer needs DC"], a:1,
   why:String.raw`<p>$V_2=12$ V; power $36$ W is conserved, so $I_1=36/120=0.30$ A, i.e. $I_1/I_2=N_2/N_1$. Stepping the voltage down steps the current up in the secondary. Transformers need changing current; DC gives no secondary emf.</p>`},
  {id:"q25", q:String.raw`<p>A $0.10$ kg rod ($L=0.50$ m) slides without friction on rails inclined at $30^\circ$ to the horizontal, connected at the bottom by a $0.25\ \Omega$ resistor. A uniform $0.40$ T field points <i>vertically</i> upward. Take $g=10$ m/s$^2$. The terminal speed is closest to</p>`, choices:["$1.0$ m/s","$2.1$ m/s","$3.1$ m/s","$4.2$ m/s","$6.3$ m/s"], a:3,
   why:String.raw`<p>$\varepsilon=BLv\cos\theta$, force along the slope $=ILB\cos\theta$, so $mg\sin\theta=\dfrac{B^2L^2v\cos^2\theta}{R}$, $v=\dfrac{(0.10)(10)(0.25)(0.5)}{(0.04)(0.75)}=4.2$ m/s. Ignoring the $\cos^2\theta$ factors gives $3.1$ m/s.</p>`},
  {id:"q26", q:String.raw`<p>A metal rod of length $0.50$ m rotates at $20$ rad/s about one end in a perpendicular uniform $0.40$ T field. The emf between its ends is</p>`, choices:["$0.50$ V","$1.0$ V","$2.0$ V","$4.0$ V","zero"], a:1,
   why:String.raw`<p>$\varepsilon=\tfrac12B\omega L^2=\tfrac12(0.40)(20)(0.25)=1.0$ V. Dropping the $\tfrac12$ (using the end speed $\omega L$ for the whole rod) gives $2.0$ V.</p>`},
  {id:"q27", q:String.raw`<p>A $50\ \Omega$ resistor is connected to an AC source whose voltage has a peak value of $100$ V. The average power dissipated is</p>`, choices:["$50$ W","$100$ W","$141$ W","$200$ W","$400$ W"], a:1,
   why:String.raw`<p>$\bar P=V_0^2/(2R)=10^4/100=100$ W (rms voltage $=70.7$ V). The $200$ W choice is $V_0^2/R$, the power at the peak.</p>`},
  {id:"q28", q:String.raw`<p>A series RLC circuit has $L=0.25$ H, $C=4.0\ \mu$F and $R=10\ \Omega$ with a variable-frequency source. At resonance, the angular frequency and the impedance are</p>`, choices:["$1.0\\times10^3$ rad/s and $10\\ \\Omega$","$1.0\\times10^3$ rad/s and $250\\ \\Omega$","$1.6\\times10^2$ rad/s and $10\\ \\Omega$","$2.5\\times10^{-3}$ rad/s and $10\\ \\Omega$","$1.0\\times10^3$ rad/s and $0$"], a:0,
   why:String.raw`<p>$\omega_0=1/\sqrt{LC}=1/\sqrt{10^{-6}}=1000$ rad/s. There $X_L=X_C=250\ \Omega$ and they cancel, so $Z=R=10\ \Omega$. The $250\ \Omega$ is each reactance, not the net impedance; $160$ is $f$ in Hz.</p>`},
  {id:"q29", q:String.raw`<p>In a plane electromagnetic wave in vacuum the electric field has amplitude $300$ V/m. The magnetic field amplitude is</p>`, choices:["$1.0\\times10^{-6}$ T","$3.0\\times10^{-6}$ T","$1.0\\times10^{-8}$ T","$9.0\\times10^{10}$ T","$3.0\\times10^{2}$ T"], a:0,
   why:String.raw`<p>In a wave $E=cB$, so $B=300/(3.0\times10^8)=1.0\times10^{-6}$ T. Multiplying instead of dividing by $c$ gives the absurd $9\times10^{10}$ T.</p>`}
  ],
  frq:[
  {id:"f1", type:"Mathematical routines", title:"Loop in an oscillating field",
   prompt:String.raw`<p>A circular loop of radius $r=0.15$ m and resistance $R=0.50\ \Omega$ lies in the plane of the page. A spatially uniform magnetic field perpendicular to the page and directed <i>into</i> the page has magnitude $B(t)=B_0\sin\omega t$ with $B_0=0.20$ T and $\omega=100$ rad/s. Take the positive sense around the loop as clockwise.</p>
<p>(a) Write an expression for the magnetic flux through the loop as a function of time.<br>
(b) Derive the induced emf $\varepsilon(t)$ (include sign) and its amplitude.<br>
(c) Find the amplitude of the current. State the direction of the current at $t=0$ and at $t=\pi/\omega$, with justification using Lenz's law.<br>
(d) On one set of axes, sketch $B(t)$ and $\varepsilon(t)$ for one period, labeling the first time at which each is zero.<br>
(e) Calculate the average power dissipated in the loop.<br>
(f) At $t=\pi/\omega$ the field is zero. Explain why the current is not zero at this instant.</p>`,
   pts:[
    {p:1,d:"$\\Phi=\\pi r^2B_0\\sin\\omega t=7.07\\times10^{-2}\\cdot0.20\\ldots=1.41\\times10^{-2}\\sin(100t)$ Wb (amplitude $\\approx0.0141$ Wb), sign consistent with normal into the page"},
    {p:1,d:"$\\varepsilon=-d\\Phi/dt=-\\pi r^2B_0\\omega\\cos\\omega t$"},
    {p:1,d:"Amplitude $\\varepsilon_0=1.41$ V and current amplitude $I_0=\\varepsilon_0/R=2.8$ A"},
    {p:1,d:"At $t=0$: B into page and increasing, induced B out of page, counterclockwise (negative emf in the clockwise-positive convention)"},
    {p:1,d:"At $t=\\pi/\\omega$: B into page and decreasing, induced field into page, clockwise"},
    {p:1,d:"Graph: $B$ sine starting at zero, $\\varepsilon$ is a negative cosine, a quarter period out of phase; $B=0$ at $t=0,\\pi/\\omega$; $\\varepsilon=0$ at $\\pi/2\\omega=15.7$ ms"},
    {p:1,d:"$\\bar P=\\varepsilon_0^2/(2R)\\approx2.0$ W"},
    {p:1,d:"Explanation: emf depends on $d\\Phi/dt$ (slope of $B$), which is a maximum when $B=0$"}],
   solution:String.raw`<p>(a) $A=\pi r^2=7.07\times10^{-2}$ m². With the normal into the page (the clockwise-positive sense), $\Phi=AB_0\sin\omega t=(1.41\times10^{-2}\ \text{Wb})\sin(100t)$.</p>
<p>(b) $\varepsilon=-\dfrac{d\Phi}{dt}=-AB_0\omega\cos\omega t=-(1.41\ \text{V})\cos(100t)$. Amplitude $\varepsilon_0=AB_0\omega=1.41$ V.</p>
<p>(c) $I_0=\varepsilon_0/R=2.83$ A. At $t=0$ the emf is negative, meaning counterclockwise: the field into the page is increasing, so the induced field points out of the page (counterclockwise current). At $t=\pi/\omega$ (31 ms): the field into the page is decreasing (slope of $\sin$ is $-1$), so the induced field points into the page: clockwise (and $\varepsilon=+1.41$ V, consistent).</p>
<p>(d) $B$ is a sine wave, zero at $t=0$, $\pi/\omega=31.4$ ms and $2\pi/\omega=62.8$ ms, peaking at $15.7$ ms. $\varepsilon\propto-\cos$ starts at $-1.41$ V, is zero at $15.7$ ms (when $B$ peaks) and $47.1$ ms, and reaches $+1.41$ V at 31.4 ms.</p>
<p>(e) $\bar P=\overline{\varepsilon^2}/R=\varepsilon_0^2/(2R)=(1.414)^2/(2\cdot0.50)\approx2.0$ W.</p>
<p>(f) The emf is proportional to the <i>rate of change</i> of flux. At $t=\pi/\omega$ the field passes through zero at its steepest slope, so $|d\Phi/dt|$ is maximum there. The current is zero when $B$ is at its peak, because then the flux is momentarily not changing.</p>`},
  {id:"f2", type:"Mathematical routines", title:"Sliding rod with drag and with a pull",
   prompt:String.raw`<p>A conducting rod of mass $m=0.10$ kg and length $L=0.50$ m slides without friction on two long horizontal rails connected at one end by a resistor $R=0.25\ \Omega$. A uniform field $B=0.40$ T points into the page, perpendicular to the plane of the rails. The rails and rod have negligible resistance. At $t=0$ the rod moves to the right with speed $v_0=8.0$ m/s and no other horizontal force acts on it.</p>
<p>(a) Derive the emf, the current and the magnetic force on the rod when its speed is $v$. Give the direction of the current in the rod and of the force.<br>
(b) Write the differential equation for $v(t)$ and solve it. Give the time constant numerically.<br>
(c) Find the distance the rod travels before (effectively) stopping.<br>
(d) Show that the total energy dissipated in the resistor equals the initial kinetic energy of the rod.<br>
(e) Now a constant force $F=0.80$ N to the right is applied to the rod, which starts from rest. Write the differential equation, find the terminal speed, and give $v(t)$.<br>
(f) Explain physically why a terminal speed exists, and what happens to it if $R$ is doubled.</p>`,
   pts:[
    {p:1,d:"$\\varepsilon=BLv$, $I=BLv/R$"},
    {p:1,d:"Direction: current upward in rod (loop counterclockwise by Lenz, flux into page increasing), force $B^2L^2v/R$ to the left, opposing motion"},
    {p:1,d:"ODE: $m\\,dv/dt=-B^2L^2v/R$"},
    {p:1,d:"$v=v_0e^{-t/\\tau}$ with $\\tau=mR/(B^2L^2)=0.625$ s"},
    {p:1,d:"Distance $v_0\\tau=5.0$ m (by integrating $v$ or using $v\\,dv/dx$)"},
    {p:1,d:"Energy: $\\int I^2R\\,dt=(B^2L^2/R)\\int v^2dt=\\tfrac12mv_0^2=3.2$ J"},
    {p:1,d:"Forced ODE: $m\\,dv/dt=F-B^2L^2v/R$"},
    {p:1,d:"$v_t=FR/(B^2L^2)=5.0$ m/s"},
    {p:1,d:"$v(t)=v_t(1-e^{-t/\\tau})$ with the same $\\tau=0.625$ s"},
    {p:1,d:"Physical explanation (magnetic force grows with $v$ until it balances $F$); doubling $R$ doubles $v_t$ (and $\\tau$)"}],
   solution:String.raw`<p>(a) $\varepsilon=BLv$; $I=BLv/R$. By Lenz's law the flux into the page through the loop (to the left of the rod) is increasing as the area grows, so the induced current is counterclockwise: upward in the rod. The force is $\vec F=I\vec L\times\vec B$: up $\times$ into the page points to the left, magnitude $ILB=B^2L^2v/R$, opposing the motion.</p>
<p>(b) $m\dfrac{dv}{dt}=-\dfrac{B^2L^2}{R}v$. Numbers: $B^2L^2/R=(0.16)(0.25)/0.25=0.16$ kg/s, with $B^2L^2=0.04$ T²m². So $v=v_0e^{-t/\tau}$ with $\tau=\dfrac{mR}{B^2L^2}=\dfrac{(0.10)(0.25)}{0.040}=0.625$ s.</p>
<p>(c) $x=\int_0^\infty v_0e^{-t/\tau}dt=v_0\tau=(8.0)(0.625)=5.0$ m.</p>
<p>(d) $\int_0^\infty I^2R\,dt=\dfrac{B^2L^2}{R}\int_0^\infty v_0^2e^{-2t/\tau}dt=\dfrac{B^2L^2}{R}\dfrac{v_0^2\tau}{2}=\dfrac{B^2L^2}{R}\dfrac{v_0^2}{2}\dfrac{mR}{B^2L^2}=\tfrac12mv_0^2=3.2$ J ✓.</p>
<p>(e) $m\dfrac{dv}{dt}=F-\dfrac{B^2L^2}{R}v$. Terminal: $v_t=\dfrac{FR}{B^2L^2}=\dfrac{(0.80)(0.25)}{0.040}=5.0$ m/s. Solution: $v=v_t(1-e^{-t/\tau})$, $\tau=0.625$ s.</p>
<p>(f) The magnetic braking force grows linearly with speed. The rod speeds up until it equals the applied force; then net force is zero. With $R$ doubled, less current flows at a given speed, so the braking force is weaker and the balance is reached at twice the speed: $v_t$ doubles (and $\tau$ also doubles).</p>`},
  {id:"f3", type:"Translation between representations", title:"LR and LC circuits",
   prompt:String.raw`<p>A battery of emf $\varepsilon=10$ V, a resistor $R=25\ \Omega$ and an ideal inductor $L=0.10$ H are connected in series with a switch. The switch is closed at $t=0$, when the current is zero.</p>
<p>(a) Write the loop-rule equation and solve it for $I(t)$. Give the time constant and the final current.<br>
(b) Derive the voltage across the inductor, $V_L(t)$. Sketch $I(t)$ and $V_L(t)$ on separate graphs, labeling intercepts, asymptotes and the initial slope of $I$.<br>
(c) At what time are the voltages across $R$ and $L$ equal?<br>
(d) After the current has reached its final value, the battery is replaced instantly by a wire (the loop stays closed). Find $I(t)$ from then and the total heat generated in the resistor.<br>
(e) Separately, a $10\ \mu$F capacitor charged to $20$ V is connected across the same $0.10$ H inductor, with no resistance. Find $\omega$, the period, the charge amplitude and the maximum current.<br>
(f) Sketch $q(t)$ and $I(t)$ on the same axes for one period, with the correct relative phase. Then explain qualitatively what changes if a small resistor is added in series.</p>`,
   pts:[
    {p:1,d:"$\\varepsilon-IR-L\\,dI/dt=0$"},
    {p:1,d:"$I=(\\varepsilon/R)(1-e^{-t/\\tau})$, $\\tau=L/R=4.0$ ms, $I_\\infty=0.40$ A"},
    {p:1,d:"$V_L=\\varepsilon e^{-t/\\tau}$ (10 V falling to 0)"},
    {p:1,d:"Sketches: $I$ rising from 0 with initial slope $\\varepsilon/L=100$ A/s and asymptote 0.40 A; $V_L$ decaying from 10 V; time constant marked"},
    {p:1,d:"$V_R=V_L\\Rightarrow I=0.20$ A, $t=\\tau\\ln2=2.8$ ms"},
    {p:1,d:"Decay $I=0.40e^{-t/\\tau}$ and heat $=\\tfrac12LI^2=8.0$ mJ"},
    {p:1,d:"$\\omega=1/\\sqrt{LC}=1000$ rad/s, $T=2\\pi/\\omega=6.3$ ms"},
    {p:1,d:"$Q_0=CV_0=200\\ \\mu$C, $I_{max}=\\omega Q_0=0.20$ A (energy check $2.0$ mJ)"},
    {p:1,d:"Graph: $q=Q_0\\cos\\omega t$ and $I=-\\omega Q_0\\sin\\omega t$, a quarter period out of phase, correct amplitudes"},
    {p:1,d:"With small $R$: oscillation continues with exponentially decaying amplitude (envelope $e^{-Rt/2L}$), slightly lower $\\omega$, energy dissipated as heat"}],
   solution:String.raw`<p>(a) $\varepsilon-IR-L\,\dfrac{dI}{dt}=0$, with $I(0)=0$: $I=\dfrac{\varepsilon}{R}(1-e^{-t/\tau})$, $\tau=L/R=0.10/25=4.0$ ms, $I_\infty=10/25=0.40$ A.</p>
<p>(b) $V_L=L\,dI/dt=\varepsilon e^{-t/\tau}$: starts at 10 V and decays to 0. The $I(t)$ sketch rises from 0 with initial slope $\varepsilon/L=100$ A/s (tangent line meets the asymptote at $t=\tau$), approaching 0.40 A; it is $63\%$ of the way at $t=\tau$.</p>
<p>(c) $V_R=IR=\varepsilon(1-e^{-t/\tau})=V_L=\varepsilon e^{-t/\tau}\Rightarrow e^{-t/\tau}=\tfrac12\Rightarrow t=\tau\ln2=2.8$ ms ($I=0.20$ A).</p>
<p>(d) $L\,dI/dt+IR=0$: $I=0.40e^{-t/\tau}$ A, with the same $\tau$. The heat equals the stored energy $\tfrac12LI_0^2=\tfrac12(0.10)(0.16)=8.0$ mJ (or $\int I^2R\,dt=(25)(0.16)\tau/2=8.0$ mJ ✓).</p>
<p>(e) $\omega=1/\sqrt{LC}=1/\sqrt{(0.10)(10^{-5})}=1000$ rad/s, $T=2\pi/\omega=6.28$ ms. $Q_0=CV_0=(10^{-5})(20)=200\ \mu$C, $I_{\max}=\omega Q_0=0.20$ A. Check: $Q_0^2/2C=2.0$ mJ and $\tfrac12LI_{\max}^2=\tfrac12(0.10)(0.04)=2.0$ mJ ✓.</p>
<p>(f) $q=200\ \mu\text{C}\cos(1000t)$ starts at its maximum; $I=-(0.20\ \text{A})\sin(1000t)$ starts at zero and goes negative (the capacitor discharges). Current is maximum in magnitude when $q=0$ (a quarter period offset). With a small resistor the same oscillation continues but the amplitude decays like $e^{-Rt/2L}$ and $\omega'$ is slightly smaller than $1/\sqrt{LC}$; the missing energy appears as heat $I^2R$ in the resistor.</p>`},
  {id:"f4", type:"Mathematical routines", title:"Loop near a long wire",
   prompt:String.raw`<p>A long straight wire lies in the plane of the page and carries a current $I(t)=kt$ upward, with $k=2.0\times10^3$ A/s. A rectangular loop of resistance $R=0.010\ \Omega$ lies in the same plane to the right of the wire. Its sides parallel to the wire have length $\ell=0.30$ m; the near side is at distance $d=0.050$ m and the far side at $d+a=0.20$ m ($a=0.15$ m).</p>
<p>(a) Write $B(r)$ for the wire and explain why $\Phi=BA$ cannot be used for the loop.<br>
(b) Derive the flux through the loop as a function of $I$, and hence the mutual inductance $M$ (symbolic, then numerical).<br>
(c) Find the induced emf and current, and the direction of the current.<br>
(d) State the direction of the net magnetic force on the loop and justify it.<br>
(e) Later the wire current is constant at $40$ A and the loop moves directly away from the wire at $3.0$ m/s. Find the emf at the instant $d=0.050$ m.</p>`,
   pts:[
    {p:1,d:"$B=\\mu_0I/(2\\pi r)$ and notes that $B$ varies over the loop, so integrate"},
    {p:1,d:"$d\\Phi=B\\,\\ell\\,dr$ with correct limits $d$ to $d+a$"},
    {p:1,d:"$\\Phi=\\dfrac{\\mu_0I\\ell}{2\\pi}\\ln\\dfrac{d+a}{d}$, so $M=\\dfrac{\\mu_0\\ell}{2\\pi}\\ln(1+a/d)=8.3\\times10^{-8}$ H"},
    {p:1,d:"$\\varepsilon=M\\,dI/dt=1.7\\times10^{-4}$ V"},
    {p:1,d:"$I_{loop}=\\varepsilon/R=17$ mA"},
    {p:1,d:"Counterclockwise, with Lenz justification (flux into page increasing)"},
    {p:1,d:"Net force away from the wire (repulsive), because near side carries current antiparallel and is in a stronger field (or by Lenz: opposes flux increase)"},
    {p:1,d:"Motional emf from the difference of $B_{near}\\ell v$ and $B_{far}\\ell v$, or by differentiating $\\Phi(d)$"},
    {p:1,d:"$\\varepsilon=\\dfrac{\\mu_0I\\ell v}{2\\pi}\\left(\\dfrac1d-\\dfrac1{d+a}\\right)$"},
    {p:1,d:"$\\varepsilon=1.1\\times10^{-4}$ V, with sign/direction clockwise noted"}],
   solution:String.raw`<p>(a) $B=\mu_0I/2\pi r$, which falls off with $r$, so different parts of the loop see different fields and the flux must be integrated.</p>
<p>(b) A strip of width $dr$ at distance $r$ has area $\ell\,dr$: $\Phi=\int_d^{d+a}\dfrac{\mu_0I}{2\pi r}\ell\,dr=\dfrac{\mu_0I\ell}{2\pi}\ln\dfrac{d+a}{d}$. $M=\Phi/I=(2\times10^{-7})(0.30)\ln4=8.32\times10^{-8}$ H.</p>
<p>(c) $\varepsilon=M\,dI/dt=(8.32\times10^{-8})(2.0\times10^3)=1.66\times10^{-4}$ V; $I_{loop}=1.66\times10^{-4}/0.010=1.7\times10^{-2}$ A. $\vec B$ at the loop is into the page and increasing, so the induced field is out of the page: counterclockwise.</p>
<p>(d) The near side carries (counterclockwise loop) current downward, opposite to the wire's current, and the far side upward; the near side is in the stronger field so repulsion wins: net force is away from the wire. Consistent with Lenz: the loop is pushed to reduce the flux.</p>
<p>(e) $\varepsilon=\dfrac{\mu_0I\ell v}{2\pi}\left(\dfrac1d-\dfrac1{d+a}\right)=(2\times10^{-7})(40)(0.30)(3.0)(20-5.0)=1.08\times10^{-4}$ V. The flux into the page is decreasing, so the current is clockwise.</p>`},
  {id:"f5", type:"Translation between representations", title:"Loop through a field region: graphs",
   prompt:String.raw`<p>A square loop of side $s=0.10$ m, resistance $R=0.020\ \Omega$ and mass $m=0.050$ kg is pulled at constant speed $v=5.0$ m/s to the right through a region of width $w=0.40$ m containing a uniform $0.80$ T field directed into the page. At $t=0$ the leading edge reaches the left boundary of the region. Take counterclockwise current as positive.</p>
<p>(a) On axes, sketch the flux through the loop versus time from $t=0$ to $t=0.10$ s. Label the key times and the maximum flux.<br>
(b) Sketch the induced emf (or current) versus time, with values.<br>
(c) Sketch the external force needed to pull the loop at constant speed. Give values.<br>
(d) Find the total energy dissipated.<br>
(e) Explain why the current is zero while the loop is fully inside the region, even though each of its sides is moving through the field.<br>
(f) Suppose instead the loop is released with speed $v_0$ and coasts. Show that during entry it loses speed $\Delta v=B^2s^3/(mR)$, and evaluate it.</p>`,
   pts:[
    {p:1,d:"Flux graph: linear rise to the maximum $Bs^2=8.0\\times10^{-3}$ Wb at $t=0.020$ s, flat to $0.080$ s, linear fall to zero at $0.100$ s"},
    {p:1,d:"Emf: $-\\,d\\Phi/dt$ gives a pulse of constant magnitude $Bsv=0.40$ V during $0$-$0.020$ s, zero for $0.020$-$0.080$ s, then opposite sign pulse for $0.080$-$0.100$ s"},
    {p:1,d:"Current $\\pm20$ A, counterclockwise positive on entry, clockwise on exit (Lenz)"},
    {p:1,d:"Force: $F=IsB=1.6$ N during entry and exit, same direction (forward applied force), zero between"},
    {p:1,d:"$Q=2(I^2R)(s/v)=2(8.0)(0.020)=0.32$ J, or $F\\cdot2s=(1.6)(0.20)$"},
    {p:1,d:"Explanation: the two sides' motional emfs are equal and opposite around the loop (or flux is constant)"},
    {p:1,d:"Force on each opposite side cancels too: no net force"},
    {p:1,d:"$m\\,v\\,dv/dx=-B^2s^2v/R$ gives $dv/dx=-B^2s^2/(mR)$, so $\\Delta v=B^2s^2\\cdot s/(mR)$"},
    {p:1,d:"Numerical value $\\Delta v=0.64$ m/s"},
    {p:1,d:"Graph labels, axes and signs consistent across (a)-(c)"}],
   solution:String.raw`<p>Entry takes $s/v=0.020$ s; the loop is fully inside from $0.020$ s to $w/v=0.080$ s; it leaves from $0.080$ s to $0.100$ s.</p>
<p>(a) $\Phi$ rises linearly from 0 to $Bs^2=(0.80)(0.010)=8.0\times10^{-3}$ Wb at $0.020$ s, is constant until $0.080$ s, then falls linearly to 0 at $0.100$ s.</p>
<p>(b) $|\varepsilon|=Bsv=(0.80)(0.10)(5.0)=0.40$ V, so $|I|=20$ A. Entry: $+20$ A (flux into the page rising, induced field out of the page, counterclockwise); middle: 0; exit: $-20$ A.</p>
<p>(c) $F=IsB=(20)(0.10)(0.80)=1.6$ N forward during both entry and exit (the magnetic force opposes the motion both times), 0 in between.</p>
<p>(d) $Q=I^2R\,t=(400)(0.020)(0.020)\times2=0.32$ J $=F\cdot2s$ ✓.</p>
<p>(e) The flux is constant, so $\varepsilon=0$. Both the leading and trailing sides have emf $Bsv$, but around the loop they point opposite ways and cancel, so there is no current and no net magnetic force.</p>
<p>(f) $m\,dv/dt=-B^2s^2v/R$; with $dv/dt=v\,dv/dx$: $dv/dx=-B^2s^2/(mR)$, a constant, so over the entry distance $s$: $\Delta v=\dfrac{B^2s^3}{mR}=\dfrac{(0.64)(10^{-3})}{(0.050)(0.020)}=0.64$ m/s.</p>`},
  {id:"f6", type:"Qualitative/quantitative translation", title:"RL network and opening the switch",
   prompt:String.raw`<p>A $24$ V battery and switch are in series with $R_1=6.0\ \Omega$. This feeds two parallel branches: a resistor $R_2=12\ \Omega$, and an ideal inductor $L=0.40$ H in series with $R_3=4.0\ \Omega$. The switch is closed at $t=0$ with no initial current.</p>
<p>(a) Find the current in each of the three resistors immediately after closing.<br>
(b) Find the currents a very long time after closing.<br>
(c) Find the time constant and the inductor current $I_L(t)$. At what time is $I_L=1.0$ A?<br>
(d) After the circuit reaches steady state, the switch is opened. Find the current in $R_2$ and the voltage across it just afterwards, and the subsequent decay time constant.<br>
(e) Find the total heat dissipated in $R_2$ afterwards.<br>
(f) Explain why the voltage across $R_2$ can exceed the battery emf.</p>`,
   pts:[
    {p:1,d:"At $0^+$: inductor branch carries 0 (open), so $I_1=I_2=24/18=1.33$ A and $I_3=0$"},
    {p:1,d:"Steady state: inductor as wire; $R_{eq}=6+12\\cdot4/16=9$, hence $I_1=24/9=2.67$ A"},
    {p:1,d:"Branch currents steady: $I_3=I_L=2.0$ A, $I_2=0.67$ A"},
    {p:1,d:"$R_{th}=R_1\\|R_2+R_3=8.0\\ \\Omega$, $\\tau=L/R_{th}=0.050$ s"},
    {p:1,d:"$I_L=2.0(1-e^{-t/\\tau})$ A"},
    {p:1,d:"$t=\\tau\\ln2=35$ ms"},
    {p:1,d:"After opening: $I_L=2.0$ A flows through $R_2$ (reversed direction), $V_{R_2}=24$ V"},
    {p:1,d:"Loop is $L$, $R_3$, $R_2$: $\\tau'=L/(R_2+R_3)=0.025$ s"},
    {p:1,d:"Heat in $R_2=\\tfrac{R_2}{R_2+R_3}\\cdot\\tfrac12LI^2=0.60$ J (total $0.80$ J)"},
    {p:1,d:"Explanation: inductor current continuous, so the inductor forces $I_0$ through the loop; $V=I_0R_2$ ignores battery; the inductor emf drives it"}],
   solution:String.raw`<p>(a) $I_L(0^+)=0$ so the inductor branch is open: $I_3=0$, $I_1=I_2=24/(6+12)=1.33$ A.</p>
<p>(b) Inductor as a wire: $R_2\parallel R_3$: $12\cdot4/16=3.0\ \Omega$. Total $9.0\ \Omega$, $I_1=2.67$ A. Voltage across the pair is $24-(6)(2.67)=8.0$ V, so $I_3=I_L=8.0/4.0=2.0$ A, $I_2=8.0/12=0.67$ A.</p>
<p>(c) Remove $L$: $V_{th}=24\cdot12/18=16$ V, $R_{th}=R_1\parallel R_2+R_3=4+4=8\ \Omega$, $\tau=0.40/8.0=0.050$ s, $I_L=\dfrac{16}{8}(1-e^{-t/\tau})=2.0(1-e^{-t/0.050})$. $I_L=1.0$ A at $t=\tau\ln2=34.7$ ms.</p>
<p>(d) $I_L=2.0$ A persists round the loop $L$-$R_3$-$R_2$: $V_{R_2}=(2.0)(12)=24$ V (opposite polarity to before). $\tau'=0.40/16=0.025$ s.</p>
<p>(e) Stored energy $\tfrac12(0.40)(4.0)=0.80$ J is shared in proportion to resistance: $R_2$ gets $12/16$ of it, $0.60$ J.</p>
<p>(f) The inductor opposes the loss of current and, as in a generator, supplies whatever emf is needed to keep $2.0$ A flowing. A larger resistor in the loop therefore sees a larger voltage; the battery is not involved.</p>`},
  {id:"f7", type:"Experimental design & analysis", title:"Measuring a magnetic field with a spinning coil",
   prompt:String.raw`<p>A student wants to measure the uniform field $B$ between the poles of a magnet. She has a flat coil of $N=200$ turns and area $A=2.5\times10^{-3}$ m$^2$, a motor whose speed can be set, a voltmeter or oscilloscope, and a stopwatch.</p>
<p>(a) Describe the setup and procedure: how the coil is placed and spun, what is measured, and which variable is changed. State how the data would be checked for sinusoidal form.<br>
(b) Derive the expected relation for the peak emf $\varepsilon_0$ versus rotation frequency $f$, and say what to plot to get a straight line, and what the slope means.<br>
(c) She measures:
 $f$ (Hz): 2, 4, 6, 8, 10; $\varepsilon_0$ (V): 0.51, 0.99, 1.52, 2.00, 2.53.
 Determine $B$ from the slope.<br>
(d) Name two sources of error and how each would affect the result. Give one change that reduces the percentage error.</p>`,
   pts:[
    {p:1,d:"Coil in the field, axis of rotation perpendicular to $\\vec B$, spun at steady known frequency; measure the peak emf for several frequencies (several trials per setting)"},
    {p:1,d:"Oscilloscope trace used to check that the waveform is a sinusoid and to read peak and frequency"},
    {p:1,d:"$\\varepsilon=NBA\\omega\\sin\\omega t$, so $\\varepsilon_0=2\\pi NBA\\,f$"},
    {p:1,d:"Plot $\\varepsilon_0$ against $f$: linear, through the origin; slope $=2\\pi NAB$"},
    {p:1,d:"Slope from best-fit line about $0.25$ V/Hz"},
    {p:1,d:"$B=\\text{slope}/(2\\pi NA)=0.080$ T"},
    {p:1,d:"Sources of error (e.g. field non-uniform over coil, wrong frequency measurement, coil axis not perpendicular to $\\vec B$ which would give too low a slope, voltmeter reading rms instead of peak) with direction of effect"},
    {p:1,d:"Improvement such as more turns or larger area (larger signal), larger frequency range, or repeated trials averaged"}],
   solution:String.raw`<p>(a) Mount the coil so its rotation axis is perpendicular to $\vec B$, spin it at several steady frequencies measured by the stopwatch (revolutions in a given time) or the oscilloscope, and record the peak voltage at each frequency. The scope shows a sine wave if the field is uniform and the speed steady; the same trace gives the period.</p>
<p>(b) $\Phi=NBA\cos\omega t$, $\varepsilon=NBA\omega\sin\omega t$, $\varepsilon_0=NBA\omega=2\pi NBA\,f$. Plot $\varepsilon_0$ vs $f$: a straight line through the origin with slope $2\pi NAB$.</p>
<p>(c) A least-squares line gives slope $\approx0.252$ V/Hz. $B=\dfrac{0.252}{2\pi(200)(2.5\times10^{-3})}=0.080$ T.</p>
<p>(d) (i) If the coil axis is not exactly perpendicular to $\vec B$, the effective field component is smaller, so $B$ comes out too low. (ii) If the field is not uniform over the coil, the measured $B$ is an average over the coil and may differ from the central value. (iii) Reading an rms meter as if peak makes $B$ too small by $\sqrt2$. Using more turns or a larger coil increases the signal, so a fixed meter uncertainty is a smaller fraction; averaging repeats also helps.</p>`}
  ]
});
