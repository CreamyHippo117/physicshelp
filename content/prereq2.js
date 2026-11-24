PH.unit({
  id:"prereq2", course:"prereq", order:11, hours:3,
  title:"Prereq 2: Graphs, data and calculus as physics",
  blurb:"How physicists actually use the calculus you already know: rates, accumulation, and the slice-and-integrate method. Then the data side: slopes and areas with units, straightening graphs, error bars, and how to run and analyze an experiment (the AP's experimental-design FRQ).",
  needs:["prereq1"],
  goals:[
    "Read any derivative as a rate and any integral as accumulation, with units that tell you what they mean",
    "Set up $dm=\\lambda\\,dx$, $dq=\\sigma\\,dA$, $dm=\\rho\\,dV$ slice-and-integrate integrals for rods, rings, disks and shells",
    "Choose axes that turn a model into a straight line, then extract constants from slope and intercept",
    "Estimate uncertainty, draw error bars, and judge a best-fit line (including max/min slopes)",
    "Identify independent, dependent and controlled variables, write a procedure, and analyze data for an experimental-design question"
  ],
  lessons:[
  {id:"l1", title:"Rates and accumulation, with units", videos:[{"title": "The Essence of Calculus, Chapter 1", "url": "https://www.youtube.com/watch?v=WUvTyaaNkzM", "src": "3Blue1Brown", "note": "Rates and accumulation intuition."}], html:String.raw`
<p>You know derivatives and integrals as limits and areas. In physics, they are two <b>verbs</b>: "how fast is this changing?" and "how much has built up?" Almost every definition in the course is one of them.</p>
<table><tr><th>Rate (derivative)</th><th>Accumulation (integral)</th></tr>
<tr><td>velocity $v=dx/dt$ (m/s)</td><td>displacement $\Delta x=\int v\,dt$ (m)</td></tr>
<tr><td>current $I=dq/dt$ (A = C/s)</td><td>charge $\Delta q=\int I\,dt$ (C)</td></tr>
<tr><td>power $P=dE/dt$ (W = J/s)</td><td>energy $\Delta E=\int P\,dt$ (J)</td></tr>
<tr><td>force $F=dp/dt$ (N)</td><td>impulse $\int F\,dt$ (N$\cdot$s)</td></tr>
<tr><td>$F=-dU/dx$ (N)</td><td>work $W=\int F\,dx$ (J)</td></tr></table>
<div class="box key"><b>The units rule.</b> The slope of a graph has units of (vertical units)/(horizontal units). The area under a graph has units of (vertical units)$\times$(horizontal units). That is all you need to decide what a slope or an area <i>means</i>: area under force vs position is N$\cdot$m = J, so it is work; slope of velocity vs time is (m/s)/s = m/s$^2$, so it is acceleration. If you are ever unsure what a slope or area represents, multiply or divide the axis units.</div>
<p><b>Setting up with initial conditions.</b> To find a quantity $y$ from its rate: $y(t)=y(0)+\int_0^t y'(t')\,dt'$. The $y(0)$ is not optional. A "derive $v(t)$" answer that omits it loses a point.</p>
<p><b>Worked graph reading.</b> A car's velocity rises linearly from 0 to 8 m/s over 4 s, then stays at 8 m/s for 3 s. The displacement is the area: triangle $\tfrac12(4)(8)=16$ m plus rectangle $8\times3=24$ m, total 40 m. Its acceleration is 2 m/s$^2$ for the first 4 s (slope), then 0.</p>
<p><b>Numerical integration from data.</b> If you have data points rather than a formula, the area is a sum of trapezoids: $\int f\,dx\approx\sum\tfrac12(f_i+f_{i+1})\Delta x_i$. The AP usually just wants you to count squares or use simple shapes.</p>
<p><b>Differential reasoning.</b> A small change $df=f'(x)\,dx$. In physics we write quantities like $dW=F\,dx$ ("a tiny bit of work in a tiny displacement") and then integrate. This is the habit of the next lesson, so be comfortable with it: a differential is a small, but finite, amount of a quantity that you treat as constant over the slice.</p>
<div class="box trap"><b>Trap:</b> The slope of a graph at a point is not the value divided by the horizontal coordinate. On a $v$-$t$ curve, $a=dv/dt$ is the slope of the <i>tangent</i>, not $v/t$ (that would be the slope of a line from the origin, which equals acceleration only for constant $a$ starting from rest).</div>`},
  {id:"l2", title:"Slice and integrate: dm, dq and friends", videos:[{"title": "Search: slice-and-integrate dm = λ dx", "url": "https://www.youtube.com/results?search_query=slice+and+integrate+dm+%3D+lambda+dx+physics+center+of+mass+rod+integral", "src": "YouTube search", "note": "Pick a short, well-reviewed explainer; no specific video verified."}], html:String.raw`
<p>Many problems involve a continuous object (a rod, a ring, a disk, a sphere) whose density varies. The method for any such problem is:</p>
<ol>
<li><b>Draw</b> the object and choose a coordinate ($x$ along a rod, $r$ out from the center, $\phi$ around a ring).</li>
<li><b>Slice</b> into a small piece at coordinate $x$ whose size is $dx$.</li>
<li><b>Write the piece's amount</b> as density $\times$ size of slice. Then integrate over all slices.</li>
</ol>
<table><tr><th>Object</th><th>Density</th><th>Slice amount</th></tr>
<tr><td>Rod (1D), length along $x$</td><td>$\lambda$ (kg/m or C/m)</td><td>$dm=\lambda\,dx$ or $dq=\lambda\,dx$</td></tr>
<tr><td>Surface (2D)</td><td>$\sigma$ (kg/m$^2$ or C/m$^2$)</td><td>$dq=\sigma\,dA$</td></tr>
<tr><td>Volume (3D)</td><td>$\rho$ (kg/m$^3$ or C/m$^3$)</td><td>$dm=\rho\,dV$</td></tr></table>
<p><b>Choosing slices well.</b> Pick slices on which the density is <i>constant</i>, so the amount is exactly density $\times$ size.</p>
<ul>
<li><b>Rod:</b> slice of length $dx$ at position $x$. $dm=\lambda(x)\,dx$.</li>
<li><b>Ring of radius $R$:</b> slice of arc $R\,d\phi$. $dq=\lambda R\,d\phi$. Total $\int_0^{2\pi}\lambda R\,d\phi=2\pi R\lambda$.</li>
<li><b>Disk of radius $R$:</b> a thin ring at radius $r$, width $dr$, has area $dA=2\pi r\,dr$ (circumference $\times$ width). So $dq=\sigma\,2\pi r\,dr$. Check: uniform $\sigma$ gives $\sigma\pi R^2$. &#10003;</li>
<li><b>Sphere:</b> a thin shell of radius $r$, thickness $dr$, has volume $dV=4\pi r^2\,dr$ (area $\times$ thickness). Check: $\int_0^R4\pi r^2dr=\tfrac43\pi R^3$. &#10003;</li>
</ul>
<svg class="fig" viewBox="0 0 440 150" width="440" role="img" aria-label="Left: a rod from x equals 0 to L with a thin slice of width dx at position x. Right: a disk of radius R with a thin ring of radius r and thickness dr">
<line x1="20" y1="60" x2="220" y2="60" stroke="currentColor" stroke-width="8"/>
<rect x="120" y="50" width="6" height="20" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="20" y1="95" x2="220" y2="95" stroke="currentColor"/><line x1="20" y1="90" x2="20" y2="100" stroke="currentColor"/><line x1="220" y1="90" x2="220" y2="100" stroke="currentColor"/><line x1="123" y1="90" x2="123" y2="100" stroke="currentColor"/>
<text x="12" y="115">0</text><text x="214" y="115">L</text><text x="116" y="115">x</text><text x="108" y="38" font-size="12">slice dx</text><text x="42" y="140" font-size="12">dm = λ dx (λ = mass per length)</text>
<circle cx="340" cy="70" r="55" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="340" cy="70" r="30" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="340" cy="70" r="2" fill="currentColor"/>
<line x1="340" y1="70" x2="370" y2="70" stroke="currentColor"/><line x1="340" y1="70" x2="395" y2="70" stroke="currentColor" stroke-dasharray="3 3"/>
<text x="352" y="64" font-size="12">r</text><text x="378" y="88" font-size="12">R</text><text x="278" y="140" font-size="12">dA = 2πr dr, dq = σ dA</text></svg>
<div class="box key"><b>Two checks every time.</b> (1) Units: $\int\lambda\,dx$ must come out in kg (or C). (2) A limiting case: for uniform density the answer must reduce to density $\times$ size (e.g. $\lambda L$).</div>
<p><b>Components and symmetry.</b> When each slice contributes a <i>vector</i> (like a field or force), add components, not magnitudes. Use symmetry first: if two slices have contributions whose perpendicular components cancel, only the other component survives. This will reduce a 3D vector integral to one scalar integral in E&amp;M (the field of a ring on its axis is the standard example).</p>
<p><b>Variable density example.</b> A rod of length $L$ with $\lambda(x)=kx$ has total mass $M=\int_0^L kx\,dx=\tfrac12kL^2$. Units: $k$ must be kg/m$^2$ so that $\lambda$ is kg/m. The center of mass is the mass-weighted average position, $x_\text{cm}=\tfrac1M\int x\,dm$ (see Example 1).</p>
<div class="box trap"><b>Trap:</b> Wrong slice size. For a disk, $dA\ne dr$; it is $2\pi r\,dr$. And mixing the integration variable with a limit: if the integrand is a function of $r$, the limits are values of $r$ (0 to $R$), not $\phi$. Always write $dm$ in terms of the <b>same</b> variable you integrate over.</div>`},
  {id:"l3", title:"Linearizing data: straight lines are the goal", videos:[{"title": "How to Linearize Data in Physics Lab", "url": "https://www.youtube.com/watch?v=fjiOGTZvpr8", "src": "YouTube", "note": "Choosing axes to get a straight line."}], html:String.raw`
<p>The human eye cannot judge whether a curve follows $y=x^2$ versus $y=x^{2.3}$, but it is excellent at judging straightness. So we <b>choose axes so the model predicts a straight line</b> $y=mx+b$, then read constants from the slope $m$ and intercept $b$.</p>
<p><b>Recipe.</b> (1) Write the theoretical relationship. (2) Rearrange so it looks like (something measured) $=$ (constant) $\times$ (something else measured) $+$ (constant). (3) Plot those two things. (4) Say what the slope and intercept equal in terms of the constants you want.</p>
<table><tr><th>Model</th><th>Plot (vertical vs horizontal)</th><th>Slope</th><th>Intercept</th></tr>
<tr><td>$T=2\pi\sqrt{\ell/g}$</td><td>$T^2$ vs $\ell$</td><td>$4\pi^2/g$</td><td>0</td></tr>
<tr><td>$x=x_0+\tfrac12at^2$</td><td>$x$ vs $t^2$</td><td>$a/2$</td><td>$x_0$</td></tr>
<tr><td>$v^2=v_0^2+2a\Delta x$</td><td>$v^2$ vs $\Delta x$</td><td>$2a$</td><td>$v_0^2$</td></tr>
<tr><td>$y=Ae^{-t/\tau}$</td><td>$\ln y$ vs $t$</td><td>$-1/\tau$</td><td>$\ln A$</td></tr>
<tr><td>$y=Ax^n$ (power law)</td><td>$\ln y$ vs $\ln x$ (log-log)</td><td>$n$</td><td>$\ln A$</td></tr>
<tr><td>$F=ma$ (fixed $m$)</td><td>$F$ vs $a$</td><td>$m$</td><td>0 (if no other force)</td></tr></table>
<svg class="fig" viewBox="0 0 360 200" width="360" role="img" aria-label="Plot of T squared in seconds squared versus pendulum length in meters, five data points lying close to a straight line through the origin">
<defs><marker id="p2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="currentColor"/></marker></defs>
<line x1="50" y1="165" x2="340" y2="165" stroke="currentColor" marker-end="url(#p2a)"/><line x1="50" y1="165" x2="50" y2="10" stroke="currentColor" marker-end="url(#p2a)"/>
<line x1="50" y1="165" x2="325" y2="32" stroke="currentColor" stroke-dasharray="6 4"/>
<circle cx="100" cy="141" r="4" fill="currentColor"/><circle cx="150" cy="117" r="4" fill="currentColor"/><circle cx="200" cy="93" r="4" fill="currentColor"/><circle cx="250" cy="68" r="4" fill="currentColor"/><circle cx="300" cy="44" r="4" fill="currentColor"/>
<text x="300" y="184">ℓ (m)</text><text x="6" y="18">T² (s²)</text><text x="44" y="182">0</text><text x="105" y="95" font-size="12">slope = 4π²/g</text></svg>
<p>Why prefer a line over a single measurement? A slope averages over <b>all</b> the data, so one bad point matters less, and the <b>intercept</b> checks your model: if theory says the line passes through the origin and it does not, there is a systematic effect (a constant offset, friction, a missed unit). Using a single data point and a formula is the weakest analysis on the AP.</p>
<div class="box key"><b>Slope and intercept carry units.</b> In the table, the slope of $T^2$ vs $\ell$ is s$^2$/m, and that must equal $4\pi^2/g$ with $g$ in m/s$^2$: $(\text{m/s}^2)^{-1}=\text{s}^2/\text{m}$. &#10003; Write the units of your slope in your answer; graders look for them.</div>
<p><b>Power-law detective.</b> If $y\propto x^n$, then doubling $x$ multiplies $y$ by $2^n$. Taking logs, $\ln y=n\ln x+\ln A$, so the slope of a log-log plot is the exponent. A measurement where $y$ goes up by 9 when $x$ goes up by 3 gives $n=2$ ($3^2=9$).</p>
<div class="box trap"><b>Trap:</b> Calculating the slope with two <i>data</i> points instead of two points on the <i>best-fit line</i>. The slope must come from points on the drawn line, far apart, not from raw measurements (which scatter).</div>`},
  {id:"l4", title:"Uncertainty, error bars and best-fit lines", videos:[{"title": "Search: uncertainty, error bars, max/min slopes", "url": "https://www.youtube.com/results?search_query=physics+lab+uncertainty+error+bars+best+fit+line+max+min+slope", "src": "YouTube search", "note": "Pick a short, well-reviewed explainer; no specific video verified."}], html:String.raw`
<p>Every measurement has an <b>uncertainty</b>: the range in which you believe the true value lies. A result written $L=1.000\pm0.002$ m means a ruler reading good to about 2 mm. Sources are <b>random</b> (scatter you can reduce by repeating and averaging) and <b>systematic</b> (a consistent bias, such as a stopwatch that starts late, a ruler with a worn end, or friction you neglected). Averaging reduces the first but never the second.</p>
<p><b>Estimating an uncertainty.</b> Common choices: half the smallest scale division for a single reading; for repeated measurements, the spread, $\sim(\text{max}-\text{min})/2$ for a handful of trials (a standard deviation if you know how).</p>
<p><b>Percent (relative) uncertainty:</b> $\delta x/x$. For products and quotients, relative uncertainties combine: for $g=4\pi^2L/T^2$,</p>
$$\frac{\delta g}{g}\approx\sqrt{\left(\frac{\delta L}{L}\right)^2+\left(2\,\frac{\delta T}{T}\right)^2}.$$
<p>The factor of 2 appears because $T$ is squared: powers multiply relative uncertainty by the power. (A cruder, always-safe bound: simply add the relative uncertainties $\delta L/L+2\,\delta T/T$.) Timing a longer interval makes $\delta T/T$ smaller, which is why you time 10 oscillations and divide by 10.</p>
<svg class="fig" viewBox="0 0 360 200" width="360" role="img" aria-label="Data points with vertical error bars and two dashed lines, steepest and shallowest, that still pass through all the error bars, plus a solid best-fit line">
<defs><marker id="p2b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="currentColor"/></marker></defs>
<line x1="50" y1="170" x2="340" y2="170" stroke="currentColor" marker-end="url(#p2b)"/><line x1="50" y1="170" x2="50" y2="10" stroke="currentColor" marker-end="url(#p2b)"/>
<line x1="50" y1="165" x2="320" y2="40" stroke="currentColor" stroke-width="2"/>
<line x1="50" y1="150" x2="320" y2="58" stroke="currentColor" stroke-dasharray="5 4"/><line x1="50" y1="175" x2="320" y2="22" stroke="currentColor" stroke-dasharray="5 4"/>
<g stroke="currentColor"><line x1="100" y1="132" x2="100" y2="156"/><line x1="150" y1="118" x2="150" y2="142"/><line x1="200" y1="96" x2="200" y2="124"/><line x1="250" y1="82" x2="250" y2="104"/><line x1="300" y1="44" x2="300" y2="74"/></g>
<circle cx="100" cy="144" r="3.5" fill="currentColor"/><circle cx="150" cy="130" r="3.5" fill="currentColor"/><circle cx="200" cy="110" r="3.5" fill="currentColor"/><circle cx="250" cy="93" r="3.5" fill="currentColor"/><circle cx="300" cy="59" r="3.5" fill="currentColor"/>
<text x="236" y="150" font-size="12">best fit (solid)</text><text x="62" y="30" font-size="12">max / min slopes (dashed)</text></svg>
<p><b>Best-fit line.</b> Draw (or compute) the line that passes through the cloud of points so that roughly half are above and half below, with no systematic trend in the residuals. It need not go through any data point, and it should pass within the error bars of most points. The AP checks for: a reasonable line, axes with labels <i>and units</i>, an appropriate scale (data fill more than half the grid), and points marked clearly (not "hidden" by the line).</p>
<p><b>Uncertainty in the slope.</b> Draw the steepest and shallowest lines that still pass through (roughly) all the error bars. The spread of their slopes, $\delta m\approx(m_\text{max}-m_\text{min})/2$, estimates the slope's uncertainty; a propagated uncertainty for $g=4\pi^2/m$ is $\delta g/g=\delta m/m$.</p>
<div class="box key"><b>Are two results consistent?</b> If their intervals (value $\pm$ uncertainty) overlap, the results are consistent; a gap of many uncertainties is a real discrepancy needing a new explanation. A <b>single</b> measurement that disagrees by 2% when your uncertainty is 5% is not a discrepancy, and "human error" is never an acceptable explanation on the AP: say <i>what</i> error, <i>which direction</i> it pushes the result, and <i>why</i>.</div>
<div class="box trap"><b>Trap:</b> More precise is not more accurate. Precision means small scatter; accuracy means close to the true value. A stopwatch that always starts 0.2 s late gives precise and inaccurate data.</div>`},
  {id:"l5", title:"Analyzing and designing an experiment (the AP's experimental FRQ)", videos:[{"title": "Search: AP experimental design FRQ", "url": "https://www.youtube.com/results?search_query=AP+Physics+C+experimental+design+free+response+how+to+answer", "src": "YouTube search", "note": "Pick a short, well-reviewed explainer; no specific video verified."}], html:String.raw`
<p>One FRQ on the Mechanics exam is an experimental design and analysis question; it also feeds MCQ questions about graphs and data. They are graded on a rubric that rewards <b>specific, reproducible, physics-based</b> statements. Master the vocabulary and the template.</p>
<p><b>The variables.</b></p>
<ul>
<li><b>Independent variable:</b> what you deliberately change (and can measure well). Goes on the horizontal axis.</li>
<li><b>Dependent variable:</b> what you measure in response. Goes on the vertical axis.</li>
<li><b>Controlled variables:</b> everything else that could affect the result, held fixed. Name the ones physics says matter (e.g., the spring, the release height, the amplitude), not generic ones ("the room").</li>
</ul>
<p><b>Writing a procedure.</b> Aim for something another student could follow: (1) the equipment from the list given; (2) a labeled diagram if helpful; (3) how each quantity is <i>measured</i> (ruler, stopwatch, balance, photogate, motion sensor); (4) what you vary and over what range (at least ~5 values, spread widely); (5) what you hold fixed; (6) repeat trials and average to reduce random error; (7) which graph you will make and what you will read from it. A procedure that lacks the measurement method is the most common missed point.</p>
<p><b>Measuring well.</b> Time many cycles and divide (reduces relative timing uncertainty). Use the largest available displacement for length/distance measurements. Let a cart <i>coast</i> through a photogate to measure speed. When measuring a falling time over a short distance, repeat many times.</p>
<p><b>Analysis template.</b></p>
<ol>
<li>Start from the theory relation, e.g. $T=2\pi\sqrt{m/k}$.</li>
<li>Rearrange to a line: $T^2=\dfrac{4\pi^2}{k}\,m$. State what to plot and what the slope is.</li>
<li>Compute any new columns (e.g. $T^2$), then plot, scale, label with units, draw best-fit.</li>
<li>Take the slope from two points <i>on the line</i>, far apart, and show the arithmetic with units.</li>
<li>Extract the constant ($k=4\pi^2/\text{slope}$) and comment on the intercept.</li>
<li>Name a source of error and its <b>effect on the result</b> (too high or too low, or on the intercept).</li>
</ol>
<div class="box key"><b>"Justify" in an experiment</b> means: connect the plot to the physics equation. "The slope of $T^2$ vs $m$ equals $4\pi^2/k$ because $T^2=4\pi^2m/k$" earns the point; "the slope is the spring constant" does not.</div>
<p><b>Typical qualitative questions.</b> "How would the line change if there were a constant friction force?" (a vertical offset or a nonzero intercept, but the slope may be unchanged.) "Why is a graph better than one data point?" (slope averages many measurements; the intercept tests the model.) "How would you reduce the uncertainty in $T$?" (time more oscillations, repeat trials).</p>
<div class="box trap"><b>Trap:</b> Blaming "friction" or "air resistance" without saying which way it shifts the result and how you know. If a quantity could be too high or too low, say which, and tie it to a specific mechanism in the equipment.</div>`}
  ],
  examples:[
  {id:"x1", title:"Mass and center of mass of a non-uniform rod", problem:String.raw`<p>A thin rod lies along the $x$ axis from $x=0$ to $x=L=2.0$ m. Its mass per unit length is $\lambda(x)=kx$ with $k=3.0$ kg/m$^2$. Find (a) the total mass, and (b) the position of the center of mass, $x_\text{cm}=\tfrac1M\int x\,dm$.</p>`,
   solution:String.raw`<p>Slice: at position $x$, thickness $dx$, so $dm=\lambda\,dx=kx\,dx$.</p>
<p>(a) $M=\int_0^Lkx\,dx=\tfrac12kL^2=\tfrac12(3.0)(4.0)=6.0$ kg. Units: (kg/m$^2$)(m$^2$) = kg. &#10003;</p>
<p>(b) $\int x\,dm=\int_0^Lkx^2dx=\tfrac13kL^3$. So $x_\text{cm}=\dfrac{kL^3/3}{kL^2/2}=\dfrac{2L}{3}=1.33$ m.</p>
<p>The center of mass is beyond the midpoint ($L/2=1$ m), as it must be: the density increases with $x$. For a uniform rod the same method gives $L/2$.</p>`},
  {id:"x2", title:"Charge on a disk with radially varying charge density", problem:String.raw`<p>A disk of radius $R=0.20$ m carries a surface charge density $\sigma(r)=\sigma_0\,r/R$, where $\sigma_0=3.0\ \mu\text{C/m}^2$ (charge density is zero at the center and $\sigma_0$ at the rim). Find the total charge.</p>`,
   solution:String.raw`<p>Slice into thin rings: radius $r$, width $dr$, area $dA=2\pi r\,dr$. On the ring $\sigma$ is constant, so $dq=\sigma\,dA=\sigma_0\dfrac rR\,2\pi r\,dr$.</p>
$$Q=\int_0^R\frac{2\pi\sigma_0}{R}r^2\,dr=\frac{2\pi\sigma_0}{R}\cdot\frac{R^3}{3}=\frac{2\pi\sigma_0R^2}{3}.$$
<p>Numbers: $Q=\dfrac{2\pi(3.0\times10^{-6})(0.20)^2}{3}=2.5\times10^{-7}$ C $=0.25\ \mu$C.</p>
<p>Check with a limiting case: if $\sigma$ were uniform at $\sigma_0$, the charge would be $\pi R^2\sigma_0=0.38\ \mu$C. Ours is $2/3$ of that: sensible, since the density is less than $\sigma_0$ almost everywhere.</p>`},
  {id:"x3", title:"Extracting g from pendulum data", problem:String.raw`<p>A student measures the period of a pendulum at several lengths:</p>
<table><tr><th>$\ell$ (m)</th><td>0.20</td><td>0.40</td><td>0.60</td><td>0.80</td><td>1.00</td></tr><tr><th>$T$ (s)</th><td>0.90</td><td>1.27</td><td>1.55</td><td>1.80</td><td>2.01</td></tr></table>
<p>Using $T=2\pi\sqrt{\ell/g}$, decide what to plot, and use the data to find $g$.</p>`,
   solution:String.raw`<p>$T^2=\dfrac{4\pi^2}{g}\ell$: plot $T^2$ (vertical) against $\ell$ (horizontal); the line passes through the origin with slope $4\pi^2/g$.</p>
<p>$T^2$ values (s$^2$): 0.81, 1.61, 2.40, 3.24, 4.04. They increase by about 0.8 per 0.2 m, a consistent straight line. Using two points on the best-fit line (the end points essentially lie on it): slope $\approx(4.04-0.81)/(1.00-0.20)=4.04$ s$^2$/m. A least-squares fit gives the same $4.04$, with an intercept of about $-0.005$ s$^2$, consistent with zero.</p>
<p>$g=4\pi^2/\text{slope}=39.48/4.04=9.8$ m/s$^2$ (9.77 unrounded). This agrees with the accepted value. The intercept being near zero supports the model.</p>`},
  {id:"x4", title:"Propagating uncertainty and judging a discrepancy", problem:String.raw`<p>A student measures $\ell=1.000\pm0.002$ m and $T=2.01\pm0.01$ s for a pendulum and computes $g=4\pi^2\ell/T^2$. (a) Find $g$ and its uncertainty. (b) Is the result consistent with $g=9.80$ m/s$^2$? (c) Which measurement dominates the uncertainty?</p>`,
   solution:String.raw`<p>(a) $g=4\pi^2(1.000)/(2.01)^2=9.77$ m/s$^2$. Relative uncertainties: $\delta\ell/\ell=0.002$; $2\,\delta T/T=2(0.01/2.01)=0.0100$. Combined: $\sqrt{0.002^2+0.0100^2}=0.0101$. So $\delta g=0.0101\times9.77=0.10$ m/s$^2$: $g=9.77\pm0.10$ m/s$^2$.</p>
<p>(b) The interval is $9.67$ to $9.87$, which contains $9.80$. Consistent.</p>
<p>(c) The timing uncertainty ($1.0\%$ after the factor 2) dominates over the length ($0.2\%$). To improve, time several oscillations (say 10 swings, giving $\delta T/T\approx0.1\%$ for the same stopwatch error), not a finer ruler.</p>`}
  ],
  mcq:[
  {id:"q1", q:String.raw`<p>A graph shows the power $P$ (in watts) delivered by a motor as a function of time $t$ (in seconds). The area under the graph between $t_1$ and $t_2$ represents</p>`, choices:["the work done (energy delivered) by the motor in that interval, in joules","the average force exerted, in newtons","the acceleration of the motor, in m/s$^2$","the momentum change, in kg$\\cdot$m/s","the power at $t_2$, in watts"], a:0,
   why:String.raw`<p>Area has units (W)(s) = J, energy or work. Slope of $P$ vs $t$ would be W/s, which has no standard name. The units rule picks the answer without any memorized fact.</p>`},
  {id:"q2", q:String.raw`<p>A velocity-time graph rises linearly from 0 to 8 m/s in 4 s, then stays at 8 m/s for another 3 s. The total displacement in the 7 s is</p>`, choices:["24 m","32 m","40 m","56 m","64 m"], a:2,
   why:String.raw`<p>Triangle: $\tfrac12(4)(8)=16$ m. Rectangle: $8\times3=24$ m. Sum $=40$ m. Using $8\times7=56$ m would ignore the slow start; $24$ m counts only the cruise.</p>`},
  {id:"q3", q:String.raw`<p>A rod of length 3 m along the $x$ axis has a charge density $\lambda=(2\ \text{C/m}^3)\,x^2$ for $0\le x\le3$ m. Its total charge is</p>`, choices:["6 C","9 C","18 C","54 C","27 C"], a:2,
   why:String.raw`<p>$Q=\int_0^3 2x^2dx=\tfrac23x^3\Big|_0^3=\tfrac23(27)=18$ C. The value 54 comes from forgetting the 1/3 in the integral (it is $\lambda(3)\times3=18\times3$, treating the density as constant at its largest value).</p>`},
  {id:"q4", q:String.raw`<p>To set up the total charge of a flat disk of radius $R$ with a radially varying surface charge density $\sigma(r)$, the correct slice is</p>`, choices:["$dq=\\sigma\\,dr$","$dq=\\sigma\\,2\\pi r\\,dr$","$dq=\\sigma\\,\\pi r^2\\,dr$","$dq=\\sigma\\,4\\pi r^2\\,dr$","$dq=\\sigma\\,2\\pi\\,dr$"], a:1,
   why:String.raw`<p>A thin ring of radius $r$ and width $dr$ has area (circumference)(width) $=2\pi r\,dr$. The $4\pi r^2dr$ choice is for a spherical shell, and the others fail the units check ($\sigma\,dr$ is C/m, not C).</p>`},
  {id:"q5", q:String.raw`<p>A spring is stretched from 0 to $0.10$ m by a force $F=kx$ with $k=200$ N/m. The work done by the stretching force equals the area under the $F$-$x$ graph, which is</p>`, choices:["20 J","10 J","2 J","1 J","0.1 J"], a:3,
   why:String.raw`<p>$W=\int_0^{0.1}200x\,dx=100x^2\big|_0^{0.1}=1$ J (the area of a triangle with base 0.1 m and height 20 N: $\tfrac12(0.1)(20)=1$ J). Using $F\Delta x=20\times0.1=2$ J is the wrong answer you get by treating the force as constant at its final value.</p>`},
  {id:"q6", q:String.raw`<p>Students want to find the acceleration due to gravity from the measured period $T$ of a pendulum of length $\ell$, with $T=2\pi\sqrt{\ell/g}$. Which graph gives a straight line from which $g$ can be found?</p>`, choices:["$T$ vs $\\ell$, with slope $2\\pi/\\sqrt g$","$T^2$ vs $\\ell$, with slope $4\\pi^2/g$","$T$ vs $\\sqrt\\ell$, with slope $g/2\\pi$","$T^2$ vs $\\sqrt\\ell$, with slope $4\\pi^2/g$","$\\ell$ vs $T$, with slope $g$"], a:1,
   why:String.raw`<p>Squaring gives $T^2=(4\pi^2/g)\ell$, a line through the origin in $T^2$ vs $\ell$. $T$ vs $\ell$ is a curve ($\sqrt\ell$), not a line. Plotting $T$ vs $\sqrt\ell$ <i>is</i> straight, but its slope is $2\pi/\sqrt g$, not $g/2\pi$.</p>`},
  {id:"q7", q:String.raw`<p>A capacitor voltage follows $V=V_0e^{-t/\tau}$. A student wants a graph whose slope gives $\tau$. The best choice is to plot</p>`, choices:["$V$ vs $t$; slope is $-1/\\tau$","$\\ln V$ vs $t$; slope is $-1/\\tau$","$\\ln V$ vs $\\ln t$; slope is $\\tau$","$V$ vs $1/t$; slope is $\\tau$","$1/V$ vs $t$; slope is $\\tau$"], a:1,
   why:String.raw`<p>$\ln V=\ln V_0-t/\tau$: straight in $\ln V$ vs $t$ with slope $-1/\tau$. A plot of $V$ vs $t$ is an exponential curve, not a line.</p>`},
  {id:"q8", q:String.raw`<p>In an experiment, a quantity $y$ is measured at $x=1,2,3$. The data show $y=5, 20, 45$ in some units. A log-log plot of $y$ vs $x$ would have a slope of</p>`, choices:["1","2","3","5","20"], a:1,
   why:String.raw`<p>$y=5x^2$ fits ($5\cdot1,\ 5\cdot4,\ 5\cdot9$), so $n=2$. The slope of the log-log graph is the exponent, not the prefactor (5) and not a data value.</p>`},
  {id:"q9", q:String.raw`<p>Two students measure the same length. One reports $10.2\pm0.4$ cm and the other reports $10.8\pm0.4$ cm. Which is the best statement?</p>`, choices:["The measurements are inconsistent because the values are not equal","The results are consistent because their uncertainty ranges overlap","One student must have made a mistake","Both are wrong because the true value is 10.5 cm","The measurement with the smaller value is more accurate"], a:1,
   why:String.raw`<p>The ranges $9.8$-$10.6$ and $10.4$-$11.2$ overlap, so the results agree within their uncertainty. Equal values are not expected for noisy measurements. Nothing here shows either is more accurate.</p>`},
  {id:"q10", q:String.raw`<p>Students study how the period of a mass on a spring depends on the hanging mass. Which set of quantities should be held constant?</p>`, choices:["The spring and the amplitude of oscillation","The hanging mass and the period","The period and the amplitude","The spring but not the amplitude","Only the stopwatch"], a:0,
   why:String.raw`<p>The mass is the independent variable and the period is the dependent one. Everything else that could affect the period, in particular the spring itself (its constant $k$) and the amplitude, should be fixed. Amplitude does not matter in the ideal model, but holding it constant makes that a tested assumption, not an unnoticed change.</p>`},
  {id:"q11", q:String.raw`<p>A student plots net applied force $F$ (vertical) against measured acceleration $a$ (horizontal) for a cart of fixed mass and fits a line, expecting $F=ma$. The line has a clearly positive vertical intercept. The most reasonable explanation is</p>`, choices:["A constant opposing force such as friction, so $F=ma+f$; the slope still gives the mass","The mass of the cart changed between trials","The slope is the friction force","The acceleration was measured in the wrong units","Newton's second law is false for this cart"], a:0,
   why:String.raw`<p>If friction $f$ opposes motion, the applied force must be $F=ma+f$. This is a line with slope $m$ and intercept $f$, so the slope is still the cart's mass. A changing mass would produce scatter or curvature, not a clean offset.</p>`}
  ],
  frq:[
  {id:"f1", type:"Experimental design & analysis", title:"Spring constant from oscillations",
   prompt:String.raw`<p>A class wants to determine the spring constant $k$ of a spring using the oscillation period of a hanging mass. The theoretical relation for an ideal spring is $T=2\pi\sqrt{m/k}$. Available equipment: a spring, a support stand, a set of hooked masses (0.10 kg to 0.50 kg), a balance, a meterstick, and a stopwatch.</p>
<p>(a) Identify the independent variable, the dependent variable, and two quantities that should be controlled.<br>
(b) Describe an experimental procedure that gives reliable data, including how each quantity is measured and how random error is reduced.<br>
(c) State which two quantities should be plotted to obtain a straight line, and what the slope equals in terms of $k$.</p>
<p>The students obtain the following data (each $T$ is the time for 10 oscillations divided by 10):</p>
<table><tr><th>$m$ (kg)</th><td>0.10</td><td>0.20</td><td>0.30</td><td>0.40</td><td>0.50</td></tr><tr><th>$T$ (s)</th><td>0.44</td><td>0.63</td><td>0.77</td><td>0.89</td><td>0.99</td></tr></table>
<p>(d) Compute the column of the quantity from part (c) that is not already in the table, and give its values.<br>
(e) Using the data, determine the slope of the best-fit line and use it to find $k$ with units.<br>
(f) The spring itself has a non-negligible mass. Predict how this affects the intercept of the line you plotted and the value of the slope, and justify your prediction physically.</p>`,
   pts:[
    {p:1,d:"Independent variable: hanging mass $m$; dependent variable: period $T$"},
    {p:1,d:"Two valid controlled variables (e.g. the same spring, same initial displacement/amplitude, same release method)"},
    {p:1,d:"Measures $m$ with the balance and $T$ with the stopwatch (and meterstick for the starting displacement)"},
    {p:1,d:"Times many (e.g. 10) oscillations, or repeats trials, and averages to reduce random error/timing uncertainty"},
    {p:1,d:"Varies $m$ over a range of at least 5 values while holding the spring and amplitude fixed"},
    {p:1,d:"Plots $T^2$ versus $m$ (or $m$ vs $T^2$ with the corresponding slope)"},
    {p:1,d:"Slope $=4\\pi^2/k$ with a reason from squaring the theory equation ($T^2=4\\pi^2m/k$)"},
    {p:1,d:"$T^2$ column: 0.19, 0.40, 0.59, 0.79, 0.98 s$^2$ (within rounding)"},
    {p:1,d:"Slope from two points on the best-fit line, far apart, with arithmetic and units, about 1.97 s$^2$/kg (accept 1.85 to 2.1)"},
    {p:1,d:"$k=4\\pi^2/\\text{slope}\\approx20$ N/m (accept about 19 to 21 N/m) with units"},
    {p:1,d:"Predicts a nonzero (positive) vertical intercept on the $T^2$ axis"},
    {p:1,d:"Justification: part of the spring's mass oscillates too, so the effective mass is larger than the hanging mass (about $m+m_s/3$); slope $4\\pi^2/k$ is unchanged"}],
   solution:String.raw`<p>(a) Independent: hanging mass $m$. Dependent: period $T$. Controlled: same spring, same starting displacement (amplitude), same release (no initial push), same location of measurement.</p>
<p>(b) Measure each mass on the balance. Hang one mass from the spring, pull it down by a fixed amount (e.g. 3 cm measured with the meterstick) and release it from rest. Start the stopwatch as the mass passes the equilibrium position, count 10 full oscillations, and stop; $T=t_{10}/10$. This reduces the effect of reaction time (about 0.2 s) on $T$ by a factor of 10. Repeat each trial 2-3 times and average. Repeat for at least five masses between 0.10 and 0.50 kg.</p>
<p>(c) Squaring, $T^2=\dfrac{4\pi^2}{k}\,m$. Plot $T^2$ (vertical) against $m$ (horizontal). The slope equals $4\pi^2/k$, and the line should pass through the origin.</p>
<p>(d) $T^2$: $0.44^2=0.19$; $0.63^2=0.40$; $0.77^2=0.59$; $0.89^2=0.79$; $0.99^2=0.98$ (s$^2$).</p>
<p>(e) Taking the endpoints of the best-fit line (which pass very close to the data), slope $=(0.98-0.19)/(0.50-0.10)=1.97$ s$^2$/kg (a least-squares fit gives 1.97). Then $k=4\pi^2/1.97=20$ N/m (39.48/1.97 = 20.0).</p>
<p>(f) The spring's mass $m_s$ also moves, with a net effect equivalent to adding about $m_s/3$ to the hanging mass: $T^2=\dfrac{4\pi^2}{k}\left(m+\tfrac{m_s}{3}\right)$. So the line has a positive $T^2$ intercept $4\pi^2m_s/(3k)$ (it does not pass through the origin) but the same slope $4\pi^2/k$, so $k$ obtained from the slope is not affected. This is one more reason to use a line rather than one data point: a single-point formula would give a biased $k$.</p>`}
  ]
});
