function showTopic(topic) {

    const area = document.getElementById("animationArea");


    // =====================================================
    // 01. LINEAR DATA STRUCTURE
    // =====================================================

    if (topic === "linear") {

        area.innerHTML = `

            <h2>LINEAR DATA STRUCTURE</h2>

            <p>
                Elements are arranged sequentially, one after another.
            </p>


            <div class="linear-grid">


                <!-- ARRAY -->

                <div class="linear-card">

                    <h3>1. ARRAY</h3>

                    <p>
                        Elements are stored in continuous positions.
                    </p>

                    <div class="array-boxes">

                        <div class="array-box">10</div>
                        <div class="array-box">20</div>
                        <div class="array-box">30</div>
                        <div class="array-box">40</div>

                    </div>

                    <p>
                        Each element has an index.
                    </p>

                </div>


                <!-- STACK -->

                <div class="linear-card">

                    <h3>2. STACK — LIFO</h3>

                    <p>
                        Last In → First Out
                    </p>

                    <div class="stack-animation">

                        <div class="stack-plate plate10">
                            10
                        </div>

                        <div class="stack-plate plate20">
                            20
                        </div>

                        <div class="stack-plate plate30">
                            30
                        </div>

                    </div>

                    <p class="lifo-text">
                        30 enters last → 30 leaves first
                    </p>

                </div>


                <!-- QUEUE -->

                <div class="linear-card">

                    <h3>3. QUEUE — FIFO</h3>

                    <p>
                        First In → First Out
                    </p>

                    <div class="queue-animation">

                        <div class="person person1">
                            🧍
                        </div>

                        <div class="person person2">
                            🧍
                        </div>

                        <div class="person person3">
                            🧍
                        </div>

                        <div class="queue-door">
                            🚪
                        </div>

                    </div>

                    <p>
                        First person enters → First person leaves
                    </p>

                </div>


                <!-- LINKED LIST -->

                <div class="linear-card">

                    <h3>4. LINKED LIST</h3>

                    <p>
                        Nodes are connected using links.
                    </p>

                    <div class="linked-list">

                        <div class="list-node">
                            10
                        </div>

                        <div class="list-arrow">
                            →
                        </div>

                        <div class="list-node">
                            20
                        </div>

                        <div class="list-arrow">
                            →
                        </div>

                        <div class="list-node">
                            30
                        </div>

                        <div class="list-arrow">
                            →
                        </div>

                        <div class="list-node">
                            40
                        </div>

                    </div>

                </div>

            </div>

        `;
    }


    // =====================================================
    // 02. NON-LINEAR DATA STRUCTURE
    // =====================================================

    else if (topic === "nonlinear") {

        area.innerHTML = `

            <h2>NON-LINEAR DATA STRUCTURE</h2>

            <p>
                Elements are connected through branches or different paths.
            </p>


            <div class="nonlinear-container">


                <!-- TREE -->

                <div class="nonlinear-section">

                    <h3>🌳 TREE</h3>

                    <svg
                        class="diagram"
                        viewBox="0 0 500 330"
                    >

                        <!-- CONNECTIONS -->

                        <line
                            class="edge tree-edge"
                            x1="250"
                            y1="55"
                            x2="150"
                            y2="145"
                        />

                        <line
                            class="edge tree-edge"
                            x1="250"
                            y1="55"
                            x2="350"
                            y2="145"
                        />

                        <line
                            class="edge tree-edge"
                            x1="150"
                            y1="175"
                            x2="90"
                            y2="265"
                        />

                        <line
                            class="edge tree-edge"
                            x1="150"
                            y1="175"
                            x2="210"
                            y2="265"
                        />

                        <line
                            class="edge tree-edge"
                            x1="350"
                            y1="175"
                            x2="350"
                            y2="265"
                        />


                        <!-- NODES -->

                        <circle
                            class="svg-node"
                            cx="250"
                            cy="40"
                            r="30"
                        />

                        <text
                            class="node-label"
                            x="250"
                            y="40"
                        >
                            A
                        </text>


                        <circle
                            class="svg-node"
                            cx="150"
                            cy="160"
                            r="30"
                        />

                        <text
                            class="node-label"
                            x="150"
                            y="160"
                        >
                            B
                        </text>


                        <circle
                            class="svg-node"
                            cx="350"
                            cy="160"
                            r="30"
                        />

                        <text
                            class="node-label"
                            x="350"
                            y="160"
                        >
                            C
                        </text>


                        <circle
                            class="svg-node"
                            cx="90"
                            cy="280"
                            r="30"
                        />

                        <text
                            class="node-label"
                            x="90"
                            y="280"
                        >
                            D
                        </text>


                        <circle
                            class="svg-node"
                            cx="210"
                            cy="280"
                            r="30"
                        />

                        <text
                            class="node-label"
                            x="210"
                            y="280"
                        >
                            E
                        </text>


                        <circle
                            class="svg-node"
                            cx="350"
                            cy="280"
                            r="30"
                        />

                        <text
                            class="node-label"
                            x="350"
                            y="280"
                        >
                            F
                        </text>

                    </svg>

                </div>


                <!-- GRAPH -->

                <div class="nonlinear-section">

                    <h3>🔗 GRAPH</h3>

                    <svg
                        class="diagram"
                        viewBox="0 0 500 330"
                    >

                        <!-- CONNECTIONS -->

                        <line
                            class="edge graph-edge"
                            x1="120"
                            y1="90"
                            x2="380"
                            y2="90"
                        />

                        <line
                            class="edge graph-edge"
                            x1="120"
                            y1="90"
                            x2="120"
                            y2="250"
                        />

                        <line
                            class="edge graph-edge"
                            x1="380"
                            y1="90"
                            x2="380"
                            y2="250"
                        />

                        <line
                            class="edge graph-edge"
                            x1="120"
                            y1="250"
                            x2="380"
                            y2="250"
                        />

                        <line
                            class="edge graph-edge"
                            x1="120"
                            y1="90"
                            x2="380"
                            y2="250"
                        />


                        <!-- NODES -->

                        <circle
                            class="svg-node"
                            cx="120"
                            cy="90"
                            r="32"
                        />

                        <text
                            class="node-label"
                            x="120"
                            y="90"
                        >
                            A
                        </text>


                        <circle
                            class="svg-node"
                            cx="380"
                            cy="90"
                            r="32"
                        />

                        <text
                            class="node-label"
                            x="380"
                            y="90"
                        >
                            B
                        </text>


                        <circle
                            class="svg-node"
                            cx="120"
                            cy="250"
                            r="32"
                        />

                        <text
                            class="node-label"
                            x="120"
                            y="250"
                        >
                            C
                        </text>


                        <circle
                            class="svg-node"
                            cx="380"
                            cy="250"
                            r="32"
                        />

                        <text
                            class="node-label"
                            x="380"
                            y="250"
                        >
                            D
                        </text>

                    </svg>

                </div>

            </div>

        `;
    }


    // =====================================================
    // 03. DIVIDE AND CONQUER
    // =====================================================

    else if (topic === "divide") {

        area.innerHTML = `

            <h2>DIVIDE AND CONQUER</h2>

            <p>
                Divide → Solve → Combine
            </p>


            <div class="divide-animation">

                <div class="big-problem">
                    BIG PROBLEM
                </div>

                <div class="divide-arrow">
                    ↓
                </div>

                <div class="small-problems">

                    <div class="small-problem">
                        Problem 1
                    </div>

                    <div class="small-problem">
                        Problem 2
                    </div>

                    <div class="small-problem">
                        Problem 3
                    </div>

                </div>

                <div class="divide-arrow">
                    ↓
                </div>

                <div class="big-problem">
                    COMBINE → SOLUTION
                </div>

            </div>

        `;
    }


    // =====================================================
    // 04. DYNAMIC PROGRAMMING
    // =====================================================

    else if (topic === "dynamic") {

        area.innerHTML = `

            <h2>DYNAMIC PROGRAMMING</h2>

            <p>
                Solve → Store → Reuse
            </p>


            <div class="dp-flow">

                <div class="dp-box">
                    Solve Problem
                </div>

                <div class="dp-arrow">
                    →
                </div>

                <div class="dp-box">
                    Store Answer
                </div>

                <div class="dp-arrow">
                    →
                </div>

                <div class="dp-box">
                    Reuse Answer
                </div>

            </div>

        `;
    }


    // =====================================================
    // 05. GREEDY METHOD
    // =====================================================

    else if (topic === "greedy") {

        area.innerHTML = `

            <h2>GREEDY METHOD</h2>

            <p>
                Choose the best available option at each step.
            </p>


            <div class="greedy-flow">

                <div class="choice">
                    Choice A
                </div>

                <div class="greedy-arrow">
                    →
                </div>

                <div class="choice best-choice">
                    BEST CHOICE
                </div>

                <div class="greedy-arrow">
                    →
                </div>

                <div class="choice">
                    Next Choice
                </div>

                <div class="greedy-arrow">
                    →
                </div>

                <div class="choice best-choice">
                    SOLUTION
                </div>

            </div>

        `;
    }

}