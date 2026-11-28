PH.unit({
  id:"e5", course:"em", order:140, hours:9,
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
<p>This $\vec E$ is <b>not conservative</b>: its line integral around a closed path is not zero, so you cannot assign it a potential. Example: a uniform $\vec B(t)$ fills a circular region of radius $R$. At radius $r<R$, symmetry says $E$ is tangential and constant on the circle, so $E(2\pi r)=\pi r^2\,|dB/dt|$ and $E=\tfrac r2|dB/dt|$. Even a copper-free circle of empty space has this $E$ field.</p>
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
<p>With it, the field between the plates, at radius $r<R$: $B(2\pi r)=\mu_0\varepsilon_0\frac{d}{dt}(E\pi r^2)=\mu_0I\frac{r^2}{R^2}$, so $B=\dfrac{\mu_0Ir}{2\pi R^2}$, exactly the field of a uniformly distributed current.</p>
<svg class="fig" viewBox="0 0 320 150" width="320" role="img" aria-label="Charging parallel-plate capacitor with current I in the wires, electric field between the plates increasing, and circular magnetic field loops around the axis between the plates">
<line x1="20" y1="75" x2="100" y2="75" stroke="currentColor" stroke-width="2.5"/><line x1="220" y1="75" x2="300" y2="75" stroke="currentColor" stroke-width="2.5"/>
<line x1="100" y1="30" x2="100" y2="120" stroke="currentColor" stroke-width="4"/><line x1="220" y1="30" x2="220" y2="120" stroke="currentColor" stroke-width="4"/>
<polygon points="68,70 78,75 68,80" fill="currentColor"/><text x="48" y="65">I</text>
<line x1="115" y1="55" x2="205" y2="55" stroke="currentColor" stroke-dasharray="4 3"/><line x1="115" y1="75" x2="205" y2="75" stroke="currentColor" stroke-dasharray="4 3"/><line x1="115" y1="95" x2="205" y2="95" stroke="currentColor" stroke-dasharray="4 3"/>
<polygon points="198,52 206,55 198,58" fill="currentColor"/><polygon points="198,72 206,75 198,78" fill="currentColor"/><polygon points="198,92 206,95 198,98" fill="currentColor"/>
<text x="140" y="46">E (growing)</text><ellipse cx="160" cy="75" rx="28" ry="42" fill="none" stroke="currentColor" stroke-opacity=".6"/><text x="125" y="140">B circles the E lines</text></svg>
<p><b>Electromagnetic waves.</b> Faraday and Ampère-Maxwell together mean a changing $\vec B$ makes $\vec E$ and a changing $\vec E$ makes $\vec B$. They can sustain each other in empty space as a wave traveling at $c=1/\sqrt{\mu_0\varepsilon_0}=3.00\times10^8$ m/s. Maxwell computed this and recognized it as the speed of light. The AP does not test the derivation; it is here to show why the unit ends where it does.</p>
<div class="box key"><b>One sentence each.</b> (1) Charges make $\vec E$. (2) There are no magnetic charges. (3) Changing $\vec B$ makes circulating $\vec E$. (4) Currents and changing $\vec E$ make circulating $\vec B$.</div>`}
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
<p>At $I=I_{\max}/2$, $U_L=\tfrac14U_0$ (energy goes as $I^2$), so $U_C=\tfrac34U_0=3.0\times10^{-4}$ J.</p>`}
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
   why:String.raw`<p>With no conduction current, the circulation of $\vec B$ comes from the $\mu_0\varepsilon_0\,d\Phi_E/dt$ term of the Ampère-Maxwell law. Faraday's law is the opposite pairing: changing $B$ flux gives circulating $E$.</p>`}
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
<p>(f) $q=200\ \mu\text{C}\cos(1000t)$ starts at its maximum; $I=-(0.20\ \text{A})\sin(1000t)$ starts at zero and goes negative (the capacitor discharges). Current is maximum in magnitude when $q=0$ (a quarter period offset). With a small resistor the same oscillation continues but the amplitude decays like $e^{-Rt/2L}$ and $\omega'$ is slightly smaller than $1/\sqrt{LC}$; the missing energy appears as heat $I^2R$ in the resistor.</p>`}
  ]
});
