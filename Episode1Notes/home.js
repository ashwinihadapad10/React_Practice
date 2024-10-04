//printing hello world using react
// const heading=React.createElement('h1',{id:"heading"},"this is heading");
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);


//multiple nested html how can u write using react code
//<div id="parent"><div id="child"><h1>this is hello</h1></div></div>
// const parent=React.createElement('div',{id:"parent"},
//     React.createElement('div',{id:"child"},
//         React.createElement('h1',{id:"head"},"this is heading"
//         )
//     )
// )
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);

//multiple nested html how can u write using react code and giving 2 as siblings multiple childrens
// const Parent=React.createElement('div',{id:"parent"},React.createElement('div',{id:"child"},[React.createElement('h1',{},"heading1"),React.createElement('h2',{},"heading2")]))
// const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(Parent);



{/* 
<div id="parent">
    <div id="child">
    <h1>this is hello</h1>
    </div>
    <div id="child">
    <h1>this is hello</h1>
    </div>
</div> */}
// const parent=React.createElement('div',{id:'parent'},
//     [React.createElement('div',{id:'child1'},React.createElement('h1',{},"heading1")),
//     React.createElement('div',{id:'child2'},React.createElement('h1',{},"heading"))]
// )
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);


{/* 
<div id="parent">
    <div id="child">
    <h1>this is hello</h1>
    <h2>this is hello</h2>
    </div>
    <div id="child">
    <h1>this is hello</h1>
    <h2>this is hello</h2>
    </div>
</div> */}
const parent=React.createElement('div',{id:"parent"},
    [React.createElement('div',{id:"child1"},
        [React.createElement('h1',{},"heading1"),
            React.createElement('h2',{},"heading2")]
        ),
        React.createElement('div',{id:"child2"},
            [React.createElement('h1',{},"heading1"),
                React.createElement('h2',{},"heading2")]
            )
    ])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
    