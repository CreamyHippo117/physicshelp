PH.unit({
  id:"f1", course:"skills", order:150, hours:6,
  title:"Exam skills: FRQ strategy for both exams",
  blurb:"How free-response answers are scored, how to write them, how to design and analyze an experiment, how to attack multiple choice, and how to organize five months of study. For official exam facts (counts, timing, points) see the app's Official page.",
  needs:["m1"],
  goals:[
    "Write FRQ answers in the order graders reward: equation, substitution, answer with units, then justification",
    "Work symbolically first and check every result with units and limiting cases",
    "Tell apart 'justify', 'explain' and 'derive', and answer each in the right form",
    "Design an experiment, linearize the data, and extract a physical constant and its uncertainty from a graph",
    "Pick the right principle (Newton, energy, momentum, Gauss, Ampere, Faraday, Kirchhoff) quickly",
    "Run a paper-practice and error-log routine that carries you through five months"
  ],
  lessons:[
  {id:"l1", videos:[{title:"Search: AP Physics C free response strategy and scoring",url:"https://www.youtube.com/results?search_query=AP+Physics+C+free+response+strategy+how+FRQs+are+scored",src:"YouTube search",note:"Pick a recent video from a teacher channel; compare its advice with the rubric habits above."}], title:"How free-response answers are scored", html:String.raw`
<p>Free-response questions (FRQs) are graded against a <b>rubric</b>: a list of specific, separately earned points. A grader is not asking "is this student smart?" but "is each rubric item visibly present on the page?" Your job is to make every item easy to find. For the exact number of questions, timing and point values, see the app's <b>Official</b> page; those facts are set by the College Board and can change.</p>
<p>The free-response section tends to mix several <i>kinds</i> of task. Names and mix can vary a little from year to year, but the skills are stable:</p>
<table><tr><th>Kind of task</th><th>What it rewards</th></tr>
<tr><td>Mathematical routines</td><td>Deriving or solving symbolically with calculus; clean algebra; correct limits and constants of integration</td></tr>
<tr><td>Translation between representations</td><td>Moving among a graph, an equation, words and a diagram, without losing information</td></tr>
<tr><td>Experimental design and analysis</td><td>Procedure, variables, linearizing data, reading a slope, uncertainty</td></tr>
<tr><td>Qualitative/quantitative translation</td><td>Physics reasoning in words tied explicitly to an equation or a calculated number</td></tr></table>
<h3>Rules that decide points</h3>
<ul>
<li><b>Equations first.</b> Write the governing law or principle (for example $\sum F=ma$ or $\Delta K=W$) before substituting. A correct starting equation is often worth a point by itself, even if the arithmetic later fails.</li>
<li><b>Answer before justification.</b> When a part says "determine, and justify", state the result in a clearly marked line, then justify. Graders hunt for the answer; a correct answer buried in a paragraph can be missed, and a justification that contradicts your boxed answer loses both.</li>
<li><b>Consistent with earlier error.</b> If part (a) is wrong but part (b) uses your (a) correctly, you can still earn (b). Never leave a later part blank because an earlier one failed. Write "using my result from (a)" and carry on. Conversely, make each part's work visible so the grader can see what you carried forward.</li>
<li><b>Units and significant figures.</b> A numerical answer without units usually loses a point. Keep 2 to 3 significant figures; do not round intermediate steps; do not report 9.8000000 either. Write the unit with the final answer, not only in the middle of the work.</li>
<li><b>Cross out, do not erase wildly.</b> A single neat strike-through is fine. Two competing answers, with neither crossed out, usually earns neither.</li>
<li><b>Do not say it twice differently.</b> Extra wrong statements can cost credit even when your main line is right.</li>
</ul>
<h3>Verbs on the page</h3>
<p><b>Derive</b>: start from a fundamental relation (a law, a definition, or a stated starting equation) and show the algebra or calculus to the target. Do not just quote the target. <b>Calculate / determine</b>: show the equation and a numerical or symbolic result. <b>Justify</b>: give a reason that rests on a physics principle, with an equation or a numerical comparison where possible. <b>Explain</b>: a short chain of cause and effect in words, naming the principle ("because the net force is zero, by Newton's first law, ..."). A bare "because" is not a justification; "because energy is conserved" is a start; "because energy is conserved, so $\tfrac12mv^2=mgh$, so $v$ does not depend on $m$" earns the point.</p>
<div class="box trap"><b>Trap:</b> "Explain" does not mean "restate the answer louder". Name the principle and apply it to the specific situation.</div>`},

  {id:"l2", title:"Symbolic first, check always, and the calculus toolkit", html:String.raw`
<h3>The symbolic-first habit</h3>
<p>Carry letters through the whole solution and substitute numbers only at the end. Reasons: (1) the AP often asks for an answer "in terms of $m$, $g$, $h$" with no numbers at all; (2) letters let you check units and limits; (3) quantities cancel (mass often does), which is itself a physics result you can state; (4) one arithmetic slip no longer corrupts everything after it.</p>
<div class="box key"><b>Check every final symbolic answer twice.</b></div>
<ol>
<li><b>Units (dimensions).</b> Both sides of an equation must have the same dimensions, and you cannot add a length to a time. If $v=\sqrt{2gh}$, then $[g][h]=\mathrm{m^2/s^2}$ and the root is m/s. A wrong formula often fails here in two seconds.</li>
<li><b>Limiting cases.</b> Put in an extreme value where you already know the answer. Example: an Atwood machine acceleration $a=\dfrac{(m_2-m_1)g}{m_1+m_2}$ gives $0$ when $m_1=m_2$, gives $g$ when $m_1\to0$ (free fall), and changes sign if you swap the masses. All three are correct physics.</li>
<li><b>Sign and size.</b> Does the answer decrease when it should? Is it positive when you expect a positive quantity?</li>
</ol>
<h3>Calculus-in-physics moves you will use again and again</h3>
<table><tr><th>Move</th><th>When</th><th>Pattern</th></tr>
<tr><td>Separation of variables</td><td>$dv/dt=f(v)$, RC and RL decay, drag</td><td>$\int \dfrac{dv}{f(v)}=\int dt$, then apply initial conditions</td></tr>
<tr><td>Chain rule $a=v\,dv/dx$</td><td>Acceleration given as a function of position, or you want $v(x)$</td><td>$\int v\,dv=\int a\,dx$</td></tr>
<tr><td>Slicing with $dm$ or $dq$</td><td>Non-uniform rod, disk, shell: moments of inertia, center of mass, field of a charge distribution</td><td>$dm=\lambda\,dx$ or $\sigma\,dA$ or $\rho\,dV$; integrate $r^2\,dm$ etc.</td></tr>
<tr><td>Work as an integral</td><td>Force varies with position</td><td>$W=\int F\,dx$ (area under $F$ versus $x$)</td></tr>
<tr><td>Gauss's law symmetry</td><td>Sphere, long cylinder, infinite plane of charge</td><td>Choose a surface where $E$ is constant and perpendicular: $E\,A=Q_\text{enc}/\varepsilon_0$</td></tr>
<tr><td>Ampere's law symmetry</td><td>Long wire, solenoid, toroid</td><td>$\oint\vec B\cdot d\vec\ell=\mu_0I_\text{enc}$ with a loop along which $B$ is constant</td></tr>
<tr><td>Exponential ODE</td><td>$dy/dt=-y/\tau$</td><td>$y=y_0e^{-t/\tau}$; half-life $\tau\ln 2$</td></tr>
<tr><td>Dimensional "tracking" of a derivative</td><td>Slope of a graph</td><td>Slope units = (y units)/(x units); that is often the quantity you want</td></tr></table>
<div class="box trap"><b>Trap:</b> Integrals need <i>limits</i> or an initial condition. A bare "$+C$" never resolved is a lost point on nearly every derive question.</div>

<h3>Which principle should I use?</h3>
<p>Most of the time wasted on an exam is spent choosing the wrong tool. Run this chart top to bottom and take the first "yes".</p>
<svg class="fig" viewBox="0 0 660 560" width="660" role="img" aria-label="Decision chart for choosing a physics principle. Question boxes on the left each point right to a tool: force or acceleration at one instant leads to Newton's second law; asking for time or motion with varying force leads to Newton's second law then integrate or solve the differential equation; speed versus position with conservative forces leads to energy conservation, with friction or drag to work-energy with nonconservative work; collision or explosion leads to momentum conservation; rotation with torques leads to torque and angular momentum; field from a symmetric charge or current distribution leads to Gauss or Ampere; changing magnetic flux leads to Faraday and Lenz; circuit with loops and junctions leads to Kirchhoff and RC differential equations; no symmetry leads to superposition integrals.">
<defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="currentColor"/></marker></defs>
<g font-size="12">
<text x="10" y="18" font-weight="bold">MECHANICS</text>
<rect x="10" y="26" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="43">Need a force, tension, or the acceleration</text><text x="18" y="58">right now (one instant)?</text>
<line x1="340" y1="46" x2="400" y2="46" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="26" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="50">Newton's 2nd law with a free-body diagram</text>
<rect x="10" y="74" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="91">Need x(t) or v(t), or the force depends on</text><text x="18" y="106">time or velocity (drag, spring, ...)?</text>
<line x1="340" y1="94" x2="400" y2="94" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="74" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="91">Newton's 2nd law, then integrate</text><text x="410" y="106">(ODE, separation of variables)</text>
<rect x="10" y="122" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="139">Speed or height at two positions, only</text><text x="18" y="154">gravity or springs doing work?</text>
<line x1="340" y1="142" x2="400" y2="142" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="122" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="139">Conservation of mechanical energy</text><text x="410" y="154">(K + U constant)</text>
<rect x="10" y="170" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="187">Same, but friction, drag or an applied</text><text x="18" y="202">force also does work?</text>
<line x1="340" y1="190" x2="400" y2="190" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="170" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="187">Work-energy theorem:</text><text x="410" y="202">K_i + W_other = K_f (+U terms)</text>
<rect x="10" y="218" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="235">Collision, explosion, or very short</text><text x="18" y="250">interaction between objects?</text>
<line x1="340" y1="238" x2="400" y2="238" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="218" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="235">Momentum conservation of the system</text><text x="410" y="250">(then check if energy is lost)</text>
<rect x="10" y="266" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="283">Spinning, rolling, or torque about an axis?</text><text x="18" y="298">Is any external torque zero?</text>
<line x1="340" y1="286" x2="400" y2="286" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="266" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="283">Torque = I alpha, or angular momentum</text><text x="410" y="298">conservation if net torque is zero</text>
<text x="10" y="334" font-weight="bold">ELECTRICITY AND MAGNETISM</text>
<rect x="10" y="342" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="359">Field from charge or current with spherical,</text><text x="18" y="374">cylindrical or planar symmetry?</text>
<line x1="340" y1="362" x2="400" y2="362" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="342" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="359">Gauss's law (E) or Ampere's law (B):</text><text x="410" y="374">pick a symmetric surface or loop</text>
<rect x="10" y="390" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="407">Field at a point, but no useful symmetry?</text><text x="18" y="422">(ring, finite rod, short wire)</text>
<line x1="340" y1="410" x2="400" y2="410" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="390" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="407">Superposition integral: slice dq, use</text><text x="410" y="422">Coulomb (E) or Biot-Savart (B)</text>
<rect x="10" y="438" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="455">Magnetic flux changing in time, or a</text><text x="18" y="470">conductor moving in a B field?</text>
<line x1="340" y1="458" x2="400" y2="458" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="438" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="455">Faraday's law for emf, Lenz's law</text><text x="410" y="470">for direction</text>
<rect x="10" y="486" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="503">Currents and voltages in a circuit with</text><text x="18" y="518">resistors, capacitors, inductors?</text>
<line x1="340" y1="506" x2="400" y2="506" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="486" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="503">Kirchhoff loop and junction rules;</text><text x="410" y="518">RC / RL differential equations</text>
<text x="10" y="548" class="mut">Many problems need two tools in sequence, for example energy for a speed, then Newton for the force at that instant.</text>
</g></svg>
<p>Combining tools is normal: a pendulum bob's speed at the bottom comes from <b>energy</b>; the string's tension there then comes from <b>Newton's second law</b> (centripetal). Name each tool as you switch.</p>`},

  {id:"l3", videos:[{title:"Linearization of Data for Science Labs & Experimental Design",url:"https://www.youtube.com/watch?v=oB2I5PEYc64",src:"YouTube (channel not verified)",note:"Turning a theory into a straight-line plot and reading slope and intercept."},{title:"Linearization and Uncertainty in Slope",url:"https://www.youtube.com/watch?v=__Wr7LbvwKE",src:"YouTube (channel not verified)",note:"Worked linearization plus slope uncertainty; an IB-style treatment, matches the steepest/shallowest-line idea."}], title:"Experimental design, linearization and uncertainty", html:String.raw`
<p>An experimental question usually gives you a physical relationship and asks you to design a way to <b>test it or find a constant</b>, then analyze (often fictional) data. A good answer is concrete enough that another student could repeat it.</p>
<h3>What a complete procedure contains</h3>
<ol>
<li><b>Goal as an equation.</b> Say which quantity you want ($g$, a spring constant $k$, a resistance $R$) and the theory that connects it to what you can measure.</li>
<li><b>Variables.</b> The <b>independent variable</b> is the one you choose and change (for example the length $L$). The <b>dependent variable</b> is the one you measure in response (the period $T$). <b>Controlled variables</b> are everything else you keep fixed (same bob, small release angle). Naming them separately is routinely a rubric item.</li>
<li><b>Equipment and what each measures.</b> Meter stick for length, stopwatch or photogate for time, balance for mass, voltmeter in parallel, ammeter in series.</li>
<li><b>Steps with repetition.</b> Vary the independent variable over a wide range (at least five values), repeat each measurement and average, and say <i>how</i> you reduce error (time ten swings instead of one; measure from the pivot to the center of the bob).</li>
<li><b>What you will plot and how you will use it.</b> State the plot and what its slope or intercept means.</li>
</ol>
<h3>Linearization</h3>
<p>Straight lines are easy to judge by eye and easy to fit, so rearrange the theory into $y=mx+b$ with $y$ and $x$ built from measured quantities.</p>
<table><tr><th>Theory</th><th>Plot ($y$ vs $x$)</th><th>Slope</th></tr>
<tr><td>$T=2\pi\sqrt{L/g}$</td><td>$T^2$ vs $L$</td><td>$4\pi^2/g$</td></tr>
<tr><td>$d=v^2/(2\mu g)$ (skid distance)</td><td>$d$ vs $v^2$</td><td>$1/(2\mu g)$</td></tr>
<tr><td>$V=V_0e^{-t/RC}$</td><td>$\ln V$ vs $t$</td><td>$-1/RC$</td></tr>
<tr><td>$F=kx$</td><td>$F$ vs $x$</td><td>$k$</td></tr>
<tr><td>$y=Ax^n$ (power law)</td><td>$\ln y$ vs $\ln x$</td><td>$n$ (intercept is $\ln A$)</td></tr></table>
<svg class="fig" viewBox="0 0 340 220" width="340" role="img" aria-label="Scatter plot of T squared versus L with a best-fit line, a steeper line and a shallower line, all drawn through a common region, with a positive intercept on the vertical axis">
<line x1="50" y1="190" x2="320" y2="190" stroke="currentColor"/><line x1="50" y1="190" x2="50" y2="15" stroke="currentColor"/>
<line x1="50" y1="170" x2="300" y2="30" stroke="currentColor" stroke-width="2"/>
<line x1="50" y1="172" x2="300" y2="18" stroke="currentColor" stroke-dasharray="5 4"/>
<line x1="50" y1="168" x2="300" y2="42" stroke="currentColor" stroke-dasharray="5 4"/>
<g fill="currentColor"><circle cx="90" cy="148" r="3.5"/><circle cx="140" cy="122" r="3.5"/><circle cx="190" cy="98" r="3.5"/><circle cx="240" cy="68" r="3.5"/><circle cx="290" cy="36" r="3.5"/></g>
<text x="300" y="208">L (m)</text><text x="6" y="14">T² (s²)</text><text x="8" y="174">b</text><text x="150" y="60">steepest and shallowest lines</text><text x="150" y="76">give the range of the slope</text></svg>
<h3>Reading the graph</h3>
<ul>
<li><b>Slope:</b> choose two points <i>on the line</i>, far apart, not two data points. Show the subtraction with units. Then convert: $g=4\pi^2/\text{slope}$.</li>
<li><b>Intercept:</b> compare it with what the theory predicts. A theory $T^2\propto L$ predicts an intercept of zero. A non-zero intercept signals a <i>systematic</i> error (for example $L$ measured to the top of the bob rather than its center).</li>
<li><b>Uncertainty:</b> draw the steepest and shallowest lines that still pass through the error bars (or the scatter). Their slopes bound the slope, and therefore the constant. Random scatter is reduced by averaging; systematic errors shift every point the same way and show up as an offset.</li>
<li><b>Propagation (simple worst-case):</b> for $g=4\pi^2L/T^2$ the fractional uncertainties add, with $T$ counted twice: $\dfrac{\delta g}{g}\approx\dfrac{\delta L}{L}+2\dfrac{\delta T}{T}$.</li>
</ul>
<div class="box trap"><b>Trap:</b> Do not "improve" a result by naming a cause you did not measure. Say how an effect would shift the data (higher or lower, which axis) and whether it matches the observed intercept or scatter.</div>`},

  {id:"l4", videos:[{title:"Search: how to study for AP Physics C spaced repetition",url:"https://www.youtube.com/results?search_query=how+to+study+for+AP+Physics+C+spaced+repetition+error+log",src:"YouTube search",note:"Look for study-method advice; optional."}], title:"Multiple choice, paper practice, and a five-month method", html:String.raw`
<h3>Multiple-choice strategy</h3>
<p>Multiple choice rewards speed and judgment more than long derivations. See the Official page for the number of questions and the time; the strategy below works for any count.</p>
<ol>
<li><b>Budget time by the clock, not by feel.</b> Compute roughly how many minutes per question once, then check at fixed checkpoints. Hard problems cost the same one point as easy ones, so skip and mark anything that stalls you after about double your average time, and return at the end.</li>
<li><b>Estimate first.</b> Round $g$ to 10, $\pi$ to 3, $\sqrt{2}$ to 1.4. Choices are often spread widely enough that a one-line estimate picks the answer.</li>
<li><b>Eliminate with units and limits.</b> Throw out any choice with wrong dimensions. Then test two extremes (a mass to zero or infinity, an angle to $0^\circ$ or $90^\circ$). Usually one choice survives.</li>
<li><b>Look at the answer set.</b> Choices that differ by a factor of 2 or a sign reveal which common errors are expected, such as forgetting the $\tfrac12$ in $\tfrac12mv^2$.</li>
<li><b>Use the right tool.</b> Re-read the decision chart. A collision problem asked for a final speed is momentum, not energy.</li>
<li><b>Never leave a blank</b> unless the official rules for the current year say guessing is penalized (check the Official page); otherwise guess after eliminating.</li>
</ol>
<h3>Paper-practice protocol</h3>
<p>Do free-response practice on paper, under honest conditions, because exam skill is partly physical: handwriting, layout, speed.</p>
<ol>
<li><b>Set a timer</b> for the realistic time for that question, closed book, with only the permitted formula sheet and calculator.</li>
<li><b>Write the full answer</b> as you would on the exam: equations first, units, justification.</li>
<li><b>Self-score against the rubric</b> in a different color pen. Be strict: if the grader would have to guess your intention, no point. Score each item 0 or 1.</li>
<li><b>Classify every lost point</b> in an error log (below), then <b>redo the question from scratch</b> two to three days later without looking.</li>
</ol>
<h3>The error log</h3>
<p>Keep a notebook with one line per lost point: date, unit, question, <i>what went wrong</i>, and <i>the rule that would have prevented it</i>. Tag the cause: <b>concept</b> (did not know), <b>method</b> (wrong tool), <b>algebra/calculus</b>, <b>units/sig figs</b>, <b>reading the question</b>, <b>communication</b> (right idea, not shown). After two or three weeks, count tags. The biggest tag is your study plan.</p>
<h3>A five-month plan</h3>
<table><tr><th>Phase</th><th>Focus</th></tr>
<tr><td>Months 1-2</td><td>Learn each unit once: read, work every example, do the MCQs. Sleep on it, then redo the examples next day without looking.</td></tr>
<tr><td>Months 3-4</td><td>Finish the second exam's units. Begin <b>spaced review</b>: revisit each unit at about 1 day, 1 week, 1 month. Start the error log and weekly timed FRQs on paper.</td></tr>
<tr><td>Month 5</td><td>Mixed timed practice only. Full-length sections, strict self-scoring, rework your error log. Taper: sleep and a calm routine in the last week matter more than one more cram session.</td></tr></table>
<p>Two principles carry everything: <b>retrieval beats rereading</b> (close the page and reproduce the derivation), and <b>spacing beats massing</b> (four 30-minute sessions across a month beat one two-hour block). Since the two exams share Mechanics and E&amp;M skills that return again and again, reviewing common tools (energy, Newton, Gauss) pays double.</p>`}
  ],

  examples:[
  {id:"x1", title:"A model full-credit written answer, annotated", problem:String.raw`<p>A block of mass $m$ is released from rest at the top of a smooth (frictionless) incline whose top is a height $h$ above a horizontal floor. It slides onto the rough floor, with kinetic friction coefficient $\mu$, and stops after a distance $d$. Use $g=10$ m/s².</p>
<p>(a) Derive the block's speed $v$ at the bottom of the incline in terms of $h$ and $g$.<br>(b) Derive an expression for $d$ in terms of $h$ and $\mu$.<br>(c) For $h=1.8$ m and $\mu=0.30$ find $v$ and $d$.<br>(d) Would $d$ change if the block's mass were doubled? Justify your answer.</p>`,
   solution:String.raw`<p class="mut">What a full-credit written answer looks like. Rubric points are marked <b>[1]</b>.</p>
<p><b>(a)</b> The incline is smooth, so only gravity does work; the normal force is perpendicular to the motion and does no work. Energy is conserved: <b>[1: states principle and why friction/normal do not matter]</b></p>
$$mgh=\tfrac12mv^2\ \Rightarrow\ v=\sqrt{2gh}\qquad\textbf{[1: correct result]}$$
<p><b>(b)</b> On the floor, the normal force is $N=mg$, so friction is $f=\mu mg$ <b>[1]</b>. The work-energy theorem from the bottom to rest gives <b>[1: correct equation including negative friction work]</b>:</p>
$$0-\tfrac12mv^2=-\mu mg\,d\ \Rightarrow\ d=\frac{v^2}{2\mu g}=\frac{h}{\mu}\qquad\textbf{[1]}$$
<p>(Check: units of $h/\mu$ are meters, and $d\to\infty$ as $\mu\to0$, as it should.)</p>
<p><b>(c)</b> $v=\sqrt{2(10)(1.8)}=\sqrt{36}=6.0$ m/s and $d=1.8/0.30=6.0$ m <b>[1: both numbers with units]</b>.</p>
<p><b>(d)</b> No. <b>[answer first]</b> In $\tfrac12mv^2=\mu mg\,d$ the mass cancels, so $d=h/\mu$ depends only on $h$ and $\mu$. <b>[1: ties the explanation to the equation]</b> Physically, the extra weight raises the friction force and the kinetic energy by the same factor.</p>
<p class="mut">Total 7 points. Notice: principle named, equation before numbers, units at the end, answer before reasoning in (d), a quick check.</p>`},

  {id:"x2", title:"A deliberately weak answer, annotated", problem:String.raw`<p>Same problem as the previous example. Below is a student's written answer. Find every place it loses rubric points.</p>
<blockquote>
<p>(a) v = at, a = g, so v = 10t. Not enough info, so use v² = 2gh = 2(10)(1.8). v = 6.</p>
<p>(b) friction = μN = 0.3(10) = 3. a = 3, so d = v²/2a = 36/6 = 6.</p>
<p>(c) v = 6, d = 6.</p>
<p>(d) Yes, heavier blocks have more friction so it would stop sooner.</p>
</blockquote>`,
   solution:String.raw`<p>The numbers in (c) happen to match the model answer (6 and 6), so the final line looks right. The point loss is in the missing reasoning and the wrong conclusion.</p>
<ul>
<li><b>(a) Loses the principle point and the derivation point.</b> "$a=g$" is false on an incline (the acceleration along it is $g\sin\theta$, and no angle is given). The formula $v^2=2gh$ happens to be right, but nothing justifies it. The required statement is that energy is conserved because only gravity does work. A grader sees a wrong starting claim ($a=g$), then a guessed formula. Also: the start "$v=at$" wastes time and invites a contradiction.</li>
<li><b>(b) Loses the equation points.</b> $\mu N=0.3(10)$ is a force only if $N=mg$ is written, and $mg$ with $m$ missing gives units of m/s², not N. The line "$a=3$" is correct only because the missing $m$ cancels, but nothing shows that. Numbers were substituted before any symbolic expression; no expression for $d$ in terms of $h$ and $\mu$ was ever written, so the "derive an expression" point is missing even though the number is right.</li>
<li><b>(c) Loses the units point.</b> "v = 6" and "d = 6" have no units.</li>
<li><b>(d) Loses both points.</b> The answer is wrong. Heavier blocks do have more friction, but they also have more kinetic energy to dissipate, and the mass cancels: $d=h/\mu$. The student gave a reason without any equation, which is an intuition that sounds physical but was not tested.</li>
</ul>
<p><b>Fixes:</b> state the principle first; keep letters until the end; write $N=mg$; write units on every final number; test any "more of X means more of Y" claim against the equation.</p>
<p class="mut">Net: maybe 2 of 7 points from this answer despite two correct numbers.</p>`},

  {id:"x3", title:"Linearizing data: an RC discharge", problem:String.raw`<p>A capacitor charged to $10.0$ V is discharged through a resistor $R=20\ \mathrm{k\Omega}$. A voltmeter reads the capacitor voltage at 1-second intervals:</p>
<table><tr><th>$t$ (s)</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><th>$V$ (V)</th><td>10.0</td><td>6.07</td><td>3.66</td><td>2.25</td><td>1.34</td><td>0.82</td></tr></table>
<p>The theory is $V=V_0e^{-t/RC}$. Linearize, find the slope, and determine the capacitance $C$.</p>`,
   solution:String.raw`<p>Take the natural log: $\ln V=\ln V_0-\dfrac{t}{RC}$. Plotting $\ln V$ versus $t$ should give a straight line with slope $-1/RC$ and intercept $\ln V_0=\ln10.0=2.30$.</p>
<table><tr><th>$t$ (s)</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><th>$\ln V$</th><td>2.303</td><td>1.803</td><td>1.297</td><td>0.811</td><td>0.293</td><td>-0.198</td></tr></table>
<p>Slope using points on the line, $t=0$ and $t=5$ s: $(-0.198-2.303)/5=-0.500\ \mathrm{s^{-1}}$ (a least-squares fit gives $-0.501$). The straight line and intercept 2.30 confirm the exponential model.</p>
<p>$RC=1/0.500=2.00$ s, so $C=2.00/(20\times10^3)=1.0\times10^{-4}$ F $=100\ \mu$F.</p>
<p class="mut">Report the slope in 1/s; the logarithm itself is dimensionless once $V$ is measured in a stated unit.</p>`}
  ],

  mcq:[
  {id:"q1", q:String.raw`<p>You cannot remember the period of a mass $m$ on a spring of constant $k$ (units of $k$: N/m $=$ kg/s²). Which candidate has the dimensions of time?</p>`,
   choices:["$2\\pi\\sqrt{k/m}$","$2\\pi\\sqrt{m/k}$","$2\\pi mk$","$2\\pi\\sqrt{mk}$","$2\\pi m/k$"], a:1,
   why:String.raw`<p>$m/k$ has units kg$\,/\,$(kg/s²) $=$ s², so its square root is seconds. The inverse, $\sqrt{k/m}$, is 1/s (a frequency, not a period). $mk$ gives kg²/s² and $m/k$ alone gives s², neither a time. Units eliminate four choices in seconds.</p>`},
  {id:"q2", q:String.raw`<p>In an Atwood machine, masses $m_1$ and $m_2$ hang over a light frictionless pulley, and $m_2$ accelerates downward with acceleration $a$. Use limiting cases to decide which expression is correct.</p>`,
   choices:["$a=\\dfrac{(m_2-m_1)g}{m_1+m_2}$","$a=\\dfrac{(m_2-m_1)g}{m_2}$","$a=\\dfrac{(m_2+m_1)g}{m_2-m_1}$","$a=\\dfrac{(m_2-m_1)g}{2}$","$a=\\dfrac{(m_2-m_1)g}{m_1}$"], a:0,
   why:String.raw`<p>Test $m_1=m_2$: the acceleration must be 0; the third expression blows up, so it is out. Test $m_2\to\infty$ with $m_1$ fixed: the machine must approach free fall, $a\to g$; the fourth grows without bound, and the fifth also grows without bound, so both fail. Test $m_1\to\infty$: now $m_2$ is dragged upward at nearly $g$, so $a\to-g$; the second expression diverges to minus infinity. Only $(m_2-m_1)g/(m_1+m_2)$ passes every check.</p>`},
  {id:"q3", q:String.raw`<p>A small stone is dropped from rest from a bridge 20 m above the water. Neglecting air resistance, the time to hit the water is closest to</p>`,
   choices:["0.2 s","1 s","2 s","4 s","20 s"], a:2,
   why:String.raw`<p>$t=\sqrt{2h/g}=\sqrt{2(20)/10}=2$ s (with $g=9.8$: 2.02 s). The tempting 4 s comes from forgetting the square root ($2h/g=4$); 1 s is what you get from guessing. Rounding $g$ to 10 makes the estimate a one-line job.</p>`},
  {id:"q4", q:String.raw`<p>A 2.0 kg cart moving at 6.0 m/s on a frictionless track collides with a stationary 4.0 kg cart. They stick together. Their common speed afterward is</p>`,
   choices:["1.0 m/s","2.0 m/s","3.0 m/s","3.5 m/s","4.0 m/s"], a:1,
   why:String.raw`<p>A perfectly inelastic collision conserves momentum, not kinetic energy: $2.0(6.0)=(6.0)v\Rightarrow v=2.0$ m/s. The attractive wrong answer 3.5 m/s comes from wrongly conserving energy ($\tfrac12(2)(36)=\tfrac12(6)v^2\Rightarrow v\approx3.46$ m/s). Energy is lost to deformation and heat when the carts stick.</p>`},
  {id:"q5", q:String.raw`<p>A particle starts with velocity 3 m/s along $+x$. Its acceleration versus time graph rises linearly from 0 at $t=0$ to 6 m/s² at $t=2$ s, then falls linearly back to 0 at $t=4$ s. Its velocity at $t=4$ s is</p>`,
   choices:["12 m/s","15 m/s","18 m/s","24 m/s","27 m/s"], a:1,
   why:String.raw`<p>The area under an $a$-$t$ graph is $\Delta v$: a triangle with base 4 s and height 6 m/s² has area $\tfrac12(4)(6)=12$ m/s. Then $v=3+12=15$ m/s. The value 12 forgets the initial velocity; 24 is base times height without the $\tfrac12$.</p>`},
  {id:"q6", q:String.raw`<p>Which expression could be the magnitude of the electric field a distance $r$ from a long straight wire of uniform charge per length $\lambda$? ($\varepsilon_0$ has units C²/(N$\cdot$m²).)</p>`,
   choices:["$\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}$","$\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r^2}$","$\\dfrac{\\lambda}{4\\pi\\varepsilon_0 r^2}$","$\\dfrac{\\lambda r}{2\\pi\\varepsilon_0}$","$\\dfrac{\\lambda}{2\\pi\\varepsilon_0}$"], a:0,
   why:String.raw`<p>$E$ must have units N/C. $\lambda/\varepsilon_0$ has units (C/m)$\cdot$(N$\,$m²/C²) $=$ N$\cdot$m/C, so you need exactly one more power of 1/length: $\lambda/(\varepsilon_0 r)$. Every other choice has the wrong power of $r$. The Gauss's-law derivation, $E(2\pi rL)=\lambda L/\varepsilon_0$, gives the same result and confirms it.</p>`},
  {id:"q7", q:String.raw`<p>A student measures a pendulum length $L=1.000\pm0.004$ m and period $T=2.00\pm0.01$ s, then computes $g=4\pi^2L/T^2\approx9.87$ m/s². Using the simple worst-case rule that fractional uncertainties add (with the power counted), the uncertainty in $g$ is closest to</p>`,
   choices:["$\\pm0.04$ m/s²","$\\pm0.09$ m/s²","$\\pm0.14$ m/s²","$\\pm0.30$ m/s²","$\\pm0.50$ m/s²"], a:2,
   why:String.raw`<p>$\delta L/L=0.4\%$ and $\delta T/T=0.5\%$, counted twice because $T$ is squared: $0.4+2(0.5)=1.4\%$. Then $\delta g=0.014\times9.87\approx0.14$ m/s². Forgetting the factor 2 on $T$ gives 0.9%, or about 0.09 m/s², the tempting wrong answer.</p>`},
  {id:"q8", q:String.raw`<p>The stopping distance $d$ of a sliding crate on a rough floor is measured for several initial speeds $v$, and theory says $d=v^2/(2\mu g)$. A student plots $d$ (m) versus $v^2$ (m²/s²) and the best-fit line has slope $0.0625$ s²/m. Using $g=10$ m/s², the coefficient of friction is</p>`,
   choices:["0.10","0.20","0.40","0.80","1.6"], a:3,
   why:String.raw`<p>The slope equals $1/(2\mu g)$, so $\mu=1/(2g\cdot\text{slope})=1/(20\times0.0625)=0.80$. The wrong value 1.6 comes from using $1/(g\cdot\text{slope})$ and forgetting the 2. Check: $v=10$ m/s would give $d=6.25$ m, a reasonable skid.</p>`}
  ],

  frq:[
  {id:"f1", type:"Experimental design & analysis", title:"Measuring g with a pendulum",
   prompt:String.raw`<p>A student wants to determine the gravitational field strength $g$ using a simple pendulum: a small dense bob on a light string of adjustable length. For small release angles the theory gives $T=2\pi\sqrt{L/g}$, where $L$ is the distance from the pivot to the center of the bob.</p>
<p>(a) Describe an experimental procedure to collect the data. Identify the independent and dependent variables, name at least two quantities you must keep fixed, and say how you would reduce the uncertainty in measuring the period.</p>
<p>(b) The student measures $L$ from the pivot to the <i>top</i> of the bob and obtains these data:</p>
<table><tr><th>$L$ (m)</th><td>0.20</td><td>0.40</td><td>0.60</td><td>0.80</td><td>1.00</td></tr><tr><th>$T$ (s)</th><td>0.94</td><td>1.30</td><td>1.58</td><td>1.82</td><td>2.03</td></tr></table>
<p>Show that plotting $T^2$ versus $L$ should give a straight line, and complete a table of $T^2$ for the data (2 decimal places).</p>
<p>(c) Draw the best-fit line on a plot of $T^2$ versus $L$ (describe it with two points on the line), find its slope with units, and use it to determine $g$.</p>
<p>(d) The student draws a steepest acceptable line of slope 4.15 s²/m and a shallowest of slope 3.95 s²/m. State the resulting range of $g$.</p>
<p>(e) The best-fit line has a positive vertical intercept of about 0.07 s². Explain what this tells you about the measurement, and estimate the size of the error in $L$.</p>`,
   pts:[
    {p:1,d:"Identifies $L$ as the independent variable and $T$ as the dependent variable"},
    {p:1,d:"Names two controlled quantities (e.g. same bob and string, small release angle, same pivot)"},
    {p:1,d:"Reduces timing uncertainty by timing many oscillations and dividing, or repeating and averaging; length measured with a stated tool"},
    {p:1,d:"Squares the theory to get $T^2=(4\\pi^2/g)L$, a line with slope $4\\pi^2/g$ and zero intercept"},
    {p:1,d:"Table: $T^2$ = 0.88, 1.69, 2.50, 3.31, 4.12 s² (allow rounding)"},
    {p:1,d:"Slope computed from two well-separated points on the line (not data points necessarily), with correct units s²/m"},
    {p:1,d:"Correct slope, about 4.05 s²/m (accept 3.95 to 4.15)"},
    {p:1,d:"Uses $g=4\\pi^2/\\text{slope}$ to get about 9.7 to 9.8 m/s²"},
    {p:1,d:"Range of $g$ from $4\\pi^2/4.15=9.51$ to $4\\pi^2/3.95=9.99$ m/s², i.e. about $9.5$ to $10.0$ (steeper gives smaller $g$)"},
    {p:1,d:"Identifies a systematic error in measuring $L$ (measured to the top of the bob, not the center) as the cause of the positive intercept"},
    {p:1,d:"Quantitative estimate: intercept$/$slope $=0.07/4.05\\approx0.02$ m, so $L$ was too short by about 2 cm, the bob's radius"}],
   solution:String.raw`<p><b>(a)</b> Independent variable: length $L$. Dependent variable: period $T$. Keep the same bob and string, the same pivot, and a small release angle (below about $10^\circ$) constant. Use a meter stick to measure $L$ from the pivot to the bob's center. Release from rest and time <b>10</b> full oscillations with a stopwatch, then divide by 10; repeat each length three times and average. Use at least five lengths spread over a wide range.</p>
<p><b>(b)</b> Squaring: $T^2=\dfrac{4\pi^2}{g}L$, which is $y=mx$ with slope $4\pi^2/g$ and intercept 0.</p>
<table><tr><th>$L$ (m)</th><td>0.20</td><td>0.40</td><td>0.60</td><td>0.80</td><td>1.00</td></tr><tr><th>$T^2$ (s²)</th><td>0.88</td><td>1.69</td><td>2.50</td><td>3.31</td><td>4.12</td></tr></table>
<p><b>(c)</b> A line through (0, 0.07 s²) and (1.00 m, 4.12 s²): slope $=(4.12-0.07)/(1.00-0)=4.05$ s²/m (least squares gives 4.05). Then $g=4\pi^2/4.05=9.75$ m/s², about $9.8$ m/s².</p>
<p><b>(d)</b> $g_\text{max}=4\pi^2/3.95=9.99$ m/s², $g_\text{min}=4\pi^2/4.15=9.51$ m/s². So $g=9.75\pm0.24$ m/s², roughly 9.5 to 10.0 m/s².</p>
<p><b>(e)</b> Theory says $T^2=\frac{4\pi^2}{g}\,(L_\text{true})$ with zero intercept. A positive intercept $b$ means $T^2$ is non-zero even when the measured $L$ is 0, so the true length is longer than the measured one by $\Delta L=b/\text{slope}=0.07/4.05\approx0.017$ m, about 2 cm. That matches the bob's radius, consistent with measuring to the top of the bob. This is a <b>systematic</b> error: it shifts every point by the same $L$, so it changes the intercept but not the slope, and the value of $g$ from the slope is unaffected.</p>`},

  {id:"f2", type:"Translation between representations", title:"From a force graph to energy and words",
   prompt:String.raw`<p>A 2.0 kg object starts from rest at $x=0$ on a smooth horizontal track. The only force doing work on it is a force $F_x$ along the track, shown below as a function of position.</p>
<svg class="fig" viewBox="0 0 340 200" width="340" role="img" aria-label="Graph of F in newtons versus x in meters: constant 8 newtons from x equals 0 to 2 meters, then a straight line falling to 0 at x equals 4 meters, staying at 0 beyond">
<line x1="40" y1="160" x2="320" y2="160" stroke="currentColor"/><line x1="40" y1="160" x2="40" y2="15" stroke="currentColor"/>
<polyline points="40,40 140,40 240,160 310,160" fill="none" stroke="currentColor" stroke-width="2.5"/>
<line x1="140" y1="160" x2="140" y2="40" stroke="currentColor" stroke-dasharray="3 3"/>
<text x="14" y="44">8</text><text x="136" y="178">2</text><text x="236" y="178">4</text><text x="40" y="178">0</text><text x="300" y="178">x (m)</text><text x="8" y="14">F (N)</text></svg>
<p>(a) Write $F_x(x)$ as an equation for $0\le x\le2$ m and for $2\le x\le4$ m.<br>
(b) Find the work done from $x=0$ to $2$ m and from $2$ m to $4$ m, and the object's speed at $x=2$ m and at $x=4$ m.<br>
(c) Sketch the kinetic energy $K$ as a function of $x$ from 0 to 5 m. Label the values at $x=2$ m and $x=4$ m and describe the shape of each segment.<br>
(d) A classmate says: "Between 2 m and 4 m the force is getting smaller, so the object must be slowing down." Explain, using physics, why the classmate is wrong, and tie your explanation to an equation.</p>`,
   pts:[
    {p:1,d:"$F_x=8$ N for $0\\le x\\le2$ m"},
    {p:1,d:"$F_x=16-4x$ N (equivalently $4(4-x)$) for $2\\le x\\le4$ m"},
    {p:1,d:"Uses work as area under the curve: 16 J for the first interval and 8 J for the second"},
    {p:1,d:"Applies $W_\\text{net}=\\Delta K$: $K(2)=16$ J and $K(4)=24$ J"},
    {p:1,d:"Speeds: $v(2)=4.0$ m/s and $v(4)\\approx4.9$ m/s"},
    {p:1,d:"Sketch: straight line from 0 to 16 J on $0\\le x\\le2$ m with slope 8 J/m, then rising concave down to 24 J at $x=4$ m, flat at 24 J beyond"},
    {p:1,d:"Sketch labeled with the key values (16 J at 2 m, 24 J at 4 m) and zero slope at and beyond 4 m"},
    {p:1,d:"States the classmate is wrong because the force is still positive (in the direction of motion), so it keeps doing positive work and the speed keeps increasing"},
    {p:1,d:"Ties to an equation, e.g. $dK/dx=F_x$ or $a=F/m>0$ with a decreasing but positive acceleration; the speed would only stop growing when $F_x=0$"}],
   solution:String.raw`<p><b>(a)</b> $F_x=8$ N for $0\le x\le2$ m. For $2\le x\le4$ m the line goes from 8 N at 2 m to 0 at 4 m, slope $-4$ N/m: $F_x=8-4(x-2)=16-4x$ N.</p>
<p><b>(b)</b> Work is the area under $F_x$ versus $x$ (or $\int F_x\,dx$). First interval: rectangle, $8\times2=16$ J. Second: triangle, $\tfrac12(2)(8)=8$ J. Starting from rest, $W_\text{net}=\Delta K$:</p>
$$K(2)=16\ \text{J}\Rightarrow v=\sqrt{2K/m}=\sqrt{2(16)/2}=4.0\ \text{m/s}$$
$$K(4)=24\ \text{J}\Rightarrow v=\sqrt{2(24)/2}=\sqrt{24}\approx4.9\ \text{m/s}$$
<p>(For $2\le x\le4$ one can also write $K(x)=16+\int_2^x(16-4x')\,dx'=-2x^2+16x-8$ J, which equals 16 at $x=2$ and 24 at $x=4$.)</p>
<p><b>(c)</b> Since $dK/dx=F_x$, the slope of $K(x)$ is the force. From 0 to 2 m: a straight line, $K=8x$, reaching 16 J (slope 8 J/m). From 2 to 4 m: still rising but with decreasing slope (concave down), reaching 24 J at $x=4$ m with slope 0 there. For $x>4$ m: $F=0$ so $K$ is constant at 24 J (horizontal line).</p>
<p><b>(d)</b> The classmate confuses a decreasing force with a negative force. In words: the force still points along the object's motion, so it still does positive work and the object keeps gaining kinetic energy, and the speed keeps increasing; only the <i>rate</i> of speeding up (the acceleration, $a=F/m$, which falls from 4 m/s² to 0) decreases. Mathematically $dK/dx=F_x>0$ for $x<4$ m, so $K$ and $v$ increase all the way to $x=4$ m. The speed stops changing only where $F_x=0$.</p>`}
  ]
});
