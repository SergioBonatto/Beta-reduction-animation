class Node {
    constructor(label, position, angle) {
        this.id       = null;
        this.label    = label; // 0: initial, 1: white node, 2: black node
        this.position = position;
        this.angle    = angle; // angle for port 0
        this.ports    = [null, null, null]; // [[node0, 0], [node1, 1], [node2, 2]]
        // Pivots starts in the same positon as the ports. Each index of the array represents a port. 
        this.pivots   = [{x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}];
        this.radius   = 20;
    }

    getPortPosition(slot) {
        let add_angle = [0, getRadianFromAngle(240), getRadianFromAngle(120)][slot];
        let position  = add([this.position.x, this.position.y], rotate([this.radius, 0], this.angle + add_angle));
        return {x: position[0], y: position[1]};
    }

}

// Size for canvas element
const height  = 500;
const width   = 500;
/**
 * Represent a thing clicked. Can be of type Node or Pivot.
 * Type node: ["node", node]
 * Type pivot: ["pivot", node, port] 
 */
let elementSelected = null; 
// A node that will change it's angle. Type node: ["node", node]
let elementClicked  = null;

// -- Keys auxiliars --
let animate     = null;
let ctrlPressed = false;
let hidePivots  = false;

let prevPositionMovement = []; // [{x: 0, y: 0}] Adds all previous positions for elements moving. Does not identifies which objects move, only the position

let selectionColor  = 'green';
let nodeIdCounter   = 0;

// Nodes
// var nodes = makeNodes();

// An Node array recording the changes of the positions 
let keyframes = []; // [[node0, node1, node2..], [node0, node1, node2...] ...]

// -------- Edit this code to create your net  ---------
let nodes = [];
    
      //var choices = ["one", "two"];
      let qtd = prompt("digite a quantidade de nós desejada")
      for (let i = 0; i < qtd; i++) {
            this["node" +i] = new Node("1", {x: "localx", y: "localy"}, "getRadianFromAngle(nodeAngle)")
            nodes.push(this["node"+i])
            nodes[i].id = i
           console.log(nodes)
        }
let nodium = nodes.map(({id}) => id)
      console.log(nodium)
      function addInput(divName) {
        let newDiv = document.createElement('div');
        let selectHTML = "";
        selectHTML="<div>";
         for(i = 0; i < nodes.length; i += 1) {
           if (i < nodes.length -2){
              selectHTML += 
                '<div id="div-node-' + i +'">'+
                  '<p>' +
                    // '<select name="Nodes" id="node-select'  +i+ '">'+
                      // (nodium.map((num) => ('<option id="node'+ num +'"> Node ' + num + '</option>'))) +
                    // '</select>' +
                    'Node' + nodes[i].id +
                    '<input type="number" placeholder="Label"       id="label-node-'      + i +                 '"  ></input>'  +
                    '<input type="number" placeholder="Position X"  id="positionX-node-'  + i +                 '"  ></input>'  +
                    '<input type="number" placeholder="Position Y"  id="positionY-node-'  + i +                 '"  ></input>'  +
                    '<input type="number" placeholder="Angle"       id="angle-node-'      + i +                 '"  ></input>'  +
                  '</p>' +
                  '<p>Port '+
                    '<input type="number" placeholder="Port number" id="port-a-node'      + i +                 '"  ></input>'  +
                      ' connects to node ' +
                    '<input type="number" placeholder="Node"        id="node-'            + i + '-port-a-to-node"   ></input>'  +
                    ' port ' +
                    '<input type="number" placeHolder="Port 0"      id="node-'            + i + '-port-a-connection"></input>'  +
                  '</p>'+
                  '<p>Port '+
                    '<input type="number" placeholder="Port number" id="port-b-node'      + i +                 '"  ></input>'  +
                      ' connects to node ' +
                    '<input type="number" placeholder="Node"        id="node-'            + i + '-port-b-to-node"   ></input>'  +
                    ' port ' +
                   '<input type="number" placeholder="Port 0"       id="node-'            + i + '-port-b-connection"></input>'  +
                  '</p>'+
                  '<p>Port '+
                    '<input type="number" placeholder="Port number" id="port-c-node'      + i +                   '"></input>'  +
                      ' connects to node ' +
                    '<input type="number" placeholder="Node"        id="node-'            + i + '-port-c-to-node"   ></input>'  +
                    ' port ' +
                    '<input type="number" placeholder="Port 0"      id="node-'            + i + '-port-c-connection"></input>'  +
                  '</p>'+
                '</div>';
           } else if (i < nodes.length - 1) {
             selectHTML += 
                '<div id="div-node-' + i +'">'+
                  '<p>' +
                    // '<select name="Nodes" id="node-select">'+
                      // (nodium.map((num) => ('<option> Node ' + num + '</option>'))) +
                    // '</select>' +
                    'Node' + i +
                    '<input type="number" placeholder="Label"       id="label-node-'      + i + '"                  ></input>' +
                    '<input type="number" placeholder="Position X"  id="positionX-node-'  + i + '"                  ></input>' +
                    '<input type="number" placeholder="Position Y"  id="positionY-node-'  + i + '"                  ></input>' +
                    '<input type="number" placeholder="Angle"       id="angle-node-'      + i + '"                  ></input>' +
                  '</p>' +
                  '<p>Port '+
                    '<input type="number" placeholder="Port number" id="port-a-node'      + i + '"                  ></input>' +
                      ' connects to node ' +
                    '<input type="number" placeholder="Node"        id="node-'            + i + '-port-a-to-node"   ></input>' +
                    ' port ' +
                    '<input type="number" placeholder="Port 0"      id="node-'            + i + '-port-a-connection"></input>' +
                  '</p>'+
                  '<p>Port '+
                    '<input type="number" placeholder="Port number" id="port-b-node'      + i + '"                  ></input>' +
                      ' connects to node ' +
                    '<input type="number" placeholder="Node"        id="node-'            + i + '-port-b-to-node"   ></input>' +
                    ' port ' +
                    '<input type="number" placeholder="Port 0"      id="node-'            + i + '-port-b-connection"></input>' +
                  '</p>'+
                '</div>';
           } else {
             selectHTML += 
                '<div id="div-node-' + i +'">'+
                  '<p>' +
                    // '<select name="Nodes" id="node-select">'+
                      // (nodium.map((num) => ('<option> Node ' + num + '</option>'))) +
                    // '</select>' +
                    'Node' + i +
                    '<input type="number" placeholder="Label"       id="label-node-'      + i + '"                  ></input>' +
                    '<input type="number" placeholder="Position X"  id="positionX-node-'  + i + '"                  ></input>' +
                    '<input type="number" placeholder="Position Y"  id="positionY-node-'  + i + '"                  ></input>' +
                    '<input type="number" placeholder="Angle"       id="angle-node-'      + i + '"                  ></input>' +
                  '</p>' +
                  '<p>Port '+
                    '<input type="number" placeholder="Port number" id="port-a-node'      + i + '"                  ></input>' +
                      ' connects to node ' +
                    '<input type="number" placeholder="Node"        id="node-'            + i + '-port-a-to-node"   ></input>' +
                    ' port ' +
                    '<input type="number" placeholder="Port 0"      id="node-'            + i + '-port-a-connection"></input>' +
                  '</p>';
           }
           
           console.log("no"+ i)
        }
        selectHTML += "</div>" ;
        newDiv.innerHTML = selectHTML;
        document.getElementById(divName).appendChild(newDiv);
        console.log(nodes)
      }
      // var initialNode = new Node(0, {x: width * 0.47 - 5, y: height * 0.05}, getRadianFromAngle());
    // nodes.push(initialNode);


//
// Defines the properties of each node
function makeNodes() {
    class Node {
        constructor(label, position, angle) {
            this.id       = null;
            this.label    = label; // 0: initial, 1: white node, 2: black node
            this.position = position;
            this.angle    = angle; // angle for port 0
            this.ports    = [null, null, null]; // [[node0, 0], [node1, 1], [node2, 2]]
            // Pivots starts in the same positon as the ports. Each index of the array represents a port.
            this.pivots = [{x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}];
            this.radius = 20;
        }
        getPortPosition(slot) {
            let add_angle = [0, getRadianFromAngle(240), getRadianFromAngle(120)][slot];
            let position  = add([this.position.x, this.position.y], rotate([this.radius, 0], this.angle + add_angle));
            return {x: position[0], y: position[1]};
        }
    }
    for (i = 0; i< qtd; i++){
        // var id          = document.getElementById('node-select' + i);
        let tipo        = Number(document.getElementById('label-node-'       + i)).value;
        let positionx   = Number(document.getElementById('positionX-node-'   + i)).value;
        let positiony   = Number(document.getElementById('positionY-node-'   + i)).value;
        let angle       = Number(document.getElementById('angle-node-'       + i)).value;
        this["node" +i] = new Node(tipo, {x: positionx, y: positiony}, getRadianFromAngle(angle))
        nodes.push(this["node"+i])
    }
    for (i = 0; i < qtd; i++){
      if (i < qtd - 3) {
        let this_node     = 'node' + document.getElementById('node')
        let port_a        = Number(document.getElementById('port-a-node'   + i)).value;
        let port_b        = Number(document.getElementById('port-b-node'   + i)).value;
        let port_c        = document.getElementById('port-c-node'   + i).value;
        let to_node_a     = 'node' + document.getElementById('node-'+ i +'-port-a-to-node').value;
        let to_node_b     = 'node' + document.getElementById('node-'+ i +'-port-b-to-node').value;
        let to_node_c     = 'node' + document.getElementById('node-'+ i +'-port-c-to-node').value;
        let port_from_a   = Number(document.getElementById('node-'         + i +'-port-a-connection')).value;
        let port_from_b   = Number(document.getElementById('node-'         + i +'-port-b-connection')).value;
        let port_from_c   = Number(document.getElementById('node-'         + i +'-port-c-connection')).value;
        connectPorts([this_node , port_a], [to_node_a , port_from_a])
        connectPorts([this_node , port_b], [to_node_b , port_from_b])
        connectPorts([this_node , port_b], [to_node_c , port_from_c])       
      } else if (i < qtd - 1 ){
          let this_node     = 'node' + document.getElementById('node')
          let port_a        = Number(document.getElementById('port-a-node'   + i)).value;
          let port_b        = Number(document.getElementById('port-b-node'   + i)).value;
          let to_node_a     = 'node' + document.getElementById('node-'+ i +'-port-a-to-node').value;
          let to_node_b     = 'node' + document.getElementById('node-'+ i +'-port-b-to-node').value;
          let port_from_a   = Number(document.getElementById('node-'         + i +'-port-a-connection')).value;
          let port_from_b   = Number(document.getElementById('node-'         + i +'-port-b-connection')).value;
          console.log("pegou os elementos")
          connectPorts([this_node , port_a], [to_node_a , port_from_a])
          console.log("conectou o node a")
          connectPorts([this_node , port_b], [to_node_b , port_from_b])
          console.log('conectou o node b')
      } else {
          let this_node     = 'node' + document.getElementById('node')
          let port_a        = Number(document.getElementById('port-a-node'   + i)).value;
          let to_node_a     = 'node' + document.getElementById('node-'+ i +'-port-a-to-node').value;
          let port_from_a   = Number(document.getElementById('node-'         + i +'-port-a-connection')).value;
          connectPorts([this_node , port_a], [to_node_a , port_from_a])
          console.log('makeNodes finalizou 1')
      }
    }
    return nodes;
    console.log('makeNodes finalizou')
}
function setupCanvas(canvas) {
    var context = canvas.getContext("2d");
    if (window.devicePixelRatio > 1) {
        var canvasWidth   = canvas.width;
        var canvasHeight  = canvas.height;
        canvas.width        = canvasWidth * window.devicePixelRatio;
        canvas.height       = canvasHeight * window.devicePixelRatio;
        canvas.style.width  = canvasWidth;
        canvas.style.height = canvasHeight;
        
        context.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    return context;
  }

window.onload = function() {
    var canvas  = document.getElementById("canvas");
    var context = setupCanvas(canvas); 
    
    setInitialPositionForPivots(nodes);
    // Calls a function or evaluates an expression at specified intervals
    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (animate) {
            var animNodes = setupKeyframeForAnimation();
            for (var i = 0; i < animNodes.length; i++) {    
                drawElements(context, animNodes[i]); 
            };
        } else {
            for (var i = 0; i < nodes.length; i++) {
                // drawElements(context, nodes[i]);
            };
        }
    }, 1000/30);
    
    // -- Rotation -- 
    canvas.onclick = function(e) {
        var positionClicked = [e.offsetX, e.offsetY];
        var maxRadiusDistance = 10;
        elementClicked = null;
        for (var i = 0; i < nodes.length; i++) {    
            // Checks if any node was clicked 
            var distanceFromNode = getDistanceBetween([nodes[i].position.x, nodes[i].position.y], positionClicked);
            if (distanceFromNode <= maxRadiusDistance) {
                elementClicked = nodes[i];
                prevPositionMovement.push(elementClicked.position);
                // If clicking holding command
                if (e.metaKey) {
                    checkTransformation(elementClicked);     
                } 
            } 
        }
        
    }
    // -- Drag and drop actions --
    canvas.onmousedown = function(e) {
        var positionClicked   = [e.offsetX, e.offsetY];
        var maxRadiusDistance = 10;
        elementSelected       = null;
        elementClicked        = null;
        // Check if the initial node was clicked
        var distanceFromInitialNode = getDistanceBetween([nodes[0].position.x, nodes[0].position.y], positionClicked);
        for (var i = 0; i < nodes.length; i++) {    
            // Checks if any node was clicked 
            var distanceFromNode = getDistanceBetween([nodes[i].position.x, nodes[i].position.y], positionClicked);
            if (distanceFromNode <= maxRadiusDistance) {
                elementSelected = ["node", nodes[i]];
                prevPositionMovement.push(nodes[i].position);
                updatePivotsPosition(nodes[i]);
            }     
            // Check if any pivot was clicked
            for (var j = 0; j < 3; j++) {            
                var distanceFromPivot = getDistanceBetween([nodes[i].pivots[j].x, nodes[i].pivots[j].y], positionClicked);
                if (distanceFromPivot <= maxRadiusDistance) {
                    elementSelected = ["pivot", nodes[i], j];
                }
            }  
        }
    };
    canvas.onmousemove = function(e) {
        if (elementSelected) {
            var positionClicked = {x: e.offsetX, y: e.offsetY};
            var node = elementSelected[1];
            // Check the type of the element selected   
            if (elementSelected[0] === "pivot") {
                var pivotPort = elementSelected[2];
                node.pivots[pivotPort] = positionClicked;
            } else {
                node.position = positionClicked
                updatePivotsPosition(node);
            }
        }  
    }
    canvas.onmouseup = function(e) {
        elementSelected = null;
    }
}

function setupKeyframeForAnimation() {
    var animKeyframe = (currentKeyframe + ((Date.now() - animate) / 1000)) % keyframes.length;
    var nodesA = keyframes[Math.floor(animKeyframe)];
    var nodesB = keyframes[Math.floor(animKeyframe + 1) % keyframes.length];
    var animNodes = copyNodes(nodesA);

    // There was no reduction or duplication
    if (nodesA.length === nodesB.length) {
        // updates position, angle and pivots of a node
        for (var i = 0; i < animNodes.length; ++i) {
            var t = animKeyframe % 1;
            var {x: ax, y: ay} = nodesA[i].position;
            var {x: bx, y: by} = nodesB[i].position;
            var aa = nodesA[i].angle;
            var ba = nodesB[i].angle;
            animNodes[i].position = {x: ax+(bx-ax)*t, y: ay+(by-ay)*t};
            animNodes[i].angle = aa + (ba - aa) * t;

            for (var j = 0; j < 3; j++) {
                var {x: pax, y: pay} = nodesA[i].pivots[j];
                var {x: pbx, y: pby} = nodesB[i].pivots[j];
                animNodes[i].pivots[j] = {x: pax+(pbx-pax)*t, y: pay+(pby-pay)*t};
            }
        }
    }
    return animNodes;
}


// --- Keyboard actions --- 
window.addEventListener("keydown", keysPressed, false);

function keysPressed(e) {
    var key = e.keyCode;

    if (elementClicked) {
        switch (key) {
            case (37): // left
                elementClicked.angle = elementClicked.angle - getRadianFromAngle(5);
                break;
            case (39): // right
                elementClicked.angle = elementClicked.angle + getRadianFromAngle(5);
                break;
            case (90): // ctr+z or cmd+z
                prevPositionMovement.pop(); // removes the actual position
                if (prevPositionMovement.length > 0) {
                    elementClicked.position = elementoMoving.pop();
                } 
                break;
        }
    }

    switch (key) {
        case (91): // ctrl or command
        case (93):
            ctrlPressed = true;
        break;
        case (32): // space bar
            keyframes.push(copyNodes(nodes));
        break;
        case (80): // letter p
            // plays an animation to change keyframes 
            animateKeyframe();
        break;
        case (68): // letter d
            // load the next keyframe
            increaseKeyframe();
        break;
        case (72): // letter h
            // hide and show the pivots
            hidePivots = !hidePivots;
        break;
        case (88): // letter x
            if (keyframes.length > 1) {
                keyframes.pop();
                nodes = keyframes[keyframes.length - 1];
            }          
        break;
    }
}

function keysReleased(e) {
    ctrlPressed = false
}
// Makes a copy of nodes values
function copyNodes(nodes) {
    var copy = [];
    // Create a copy of nodes
    for (var i = 0; i < nodes.length; i++) {
        var node = new Node(nodes[i].label, nodes[i].position, nodes[i].angle);
        node.id = nodes[i].id;
        node.pivots[0] = {x: nodes[i].pivots[0].x, y: nodes[i].pivots[0].y};
        node.pivots[1] = {x: nodes[i].pivots[1].x, y: nodes[i].pivots[1].y};
        node.pivots[2] = {x: nodes[i].pivots[2].x, y: nodes[i].pivots[2].y};
        copy.push(node);
    }
    // Setup the new ports references
    for (var i = 0; i < copy.length; i++) { // in each node of nodes
        for (var j = 0; j < copy.length; j++) { // search in the array of copies
            // for the associated node for each port
            // Set infos for port 0
            if (nodes[i].ports[0][0].id === copy[j].id) {
                var nodeForPort0 = copy[j];
                var connectingOnPort = nodes[i].ports[0][1];
                copy[i].ports[0] = [nodeForPort0, connectingOnPort];
            }
            // Set infos for port 1
            if (nodes[i].ports[1][0].id === copy[j].id) {
                var nodeForPort1 = copy[j];
                var connectingOnPort = nodes[i].ports[1][1];
                copy[i].ports[1] = [nodeForPort1, connectingOnPort];
            }
            // Set infos for port 2
            if (nodes[i].ports[2][0].id === copy[j].id) {
                var nodeForPort2 = copy[j];
                var connectingOnPort = nodes[i].ports[2][1];
                copy[i].ports[2] = [nodeForPort2, connectingOnPort];
            }
        }
    }
    return copy;
}

var currentKeyframe = 0;
// -- Animation -- 
// Does an automatic animation from one keyframe to another
function animateKeyframe() {
    if (animate) {
        animate = null;
    } else {
        animate = Date.now();
    }
}

function increaseKeyframe() {
    currentKeyframe = (currentKeyframe + 1) % keyframes.length;
    nodes = keyframes[currentKeyframe];
}


// -- Transformation -- 
/*
    Evaluate if the node clicked can do a transformation. There are 2 types:
    1- Nodes with the same label: reduction
    2- Nodes with different labels: duplication
*/
function checkTransformation(node) {
    var pairToTransform = node.ports[0][0]; // get the node that the current node is connecting on port 0
        
    if (pairToTransform.ports[0][0] === node && // check if the other node on port 0 is equal to the current node
        (node !== nodes[0] && pairToTransform !== nodes[0])) { // initial node don't reduce
        if (node.label === pairToTransform.label) { // reduction
            reduceNodes(node, pairToTransform);
        } else { // duplication
            duplicateNodes(node, pairToTransform);
        }
        // remove the current nodes from the array of nodes
        nodes = nodes.filter(aux_node => (aux_node !== node && aux_node !== pairToTransform));
        // setInitialPositionForPivots(nodes);
    }
}

//  -- Reduction -- 
// Occurs between nodes with the same label. Rewrite the ports for both Nodes taking place the ports of the other one.
function reduceNodes(nodeA, nodeB) {
    // ports have the type: [node, portNumber]
    for (var i = 0; i < 3; i++) {
        // get the node associated with Port 1
        var nodeA_port_dest = nodeA.ports[i][0]; 
        var nodeB_port_dest = nodeB.ports[i][0];
        // new port that Port1 has to connect
        var a_destPort = nodeA.ports[i][1]; 
        var b_destPort = nodeB.ports[i][1];
        connectPorts([nodeA_port_dest, a_destPort], [nodeB_port_dest, b_destPort]);
    }
}

// // -- Duplication --
// // Occurs between nodes with different labels. The nodes pass through each-other, duplicating themselves
function duplicateNodes(nodeA, nodeB) {
    var xPositionLeft = nodeA.position.x - (nodeA.radius * 1.2);
    var xPositionRight = nodeA.position.x + (nodeA.radius * 1.2);
    var yPositionUp = nodeA.position.y;
    var yPositionDown = nodeA.position.y + (nodeA.radius * 2.5);

    var nodeA_leftUp = new Node(nodeA.label, {x: xPositionLeft, y: yPositionUp}, getRadianFromAngle());   
    var nodeA_rightUp = new Node(nodeA.label, {x: xPositionRight, y: yPositionUp}, getRadianFromAngle());
    var nodeB_leftDown = new Node(nodeB.label, {x: xPositionLeft, y: yPositionDown}, getRadianFromAngle(90));
    var nodeB_rightDown = new Node(nodeB.label, {x: xPositionRight, y: yPositionDown}, getRadianFromAngle(90));

    nodeA_leftUp.id = nodeIdCounter++;
    nodeA_rightUp.id = nodeIdCounter++;
    nodeB_leftDown.id = nodeIdCounter++;
    nodeB_rightDown.id = nodeIdCounter++;

    nodes.push(nodeA_leftUp);
    nodes.push(nodeA_rightUp);
    nodes.push(nodeB_leftDown);
    nodes.push(nodeB_rightDown);

    connectPorts([nodeA_leftUp, 0], [nodeB.ports[1][0], nodeB.ports[1][1]]);
    connectPorts([nodeA_rightUp, 0], [nodeB.ports[2][0], nodeB.ports[2][1]]);

    connectPorts([nodeA_leftUp, 1], [nodeB_leftDown, 2]);
    connectPorts([nodeA_leftUp, 2], [nodeB_rightDown, 2]);

    connectPorts([nodeA_rightUp, 1], [nodeB_leftDown, 1]);
    connectPorts([nodeA_rightUp, 2], [nodeB_rightDown, 1]);

    connectPorts([nodeB_leftDown, 0],[nodeA.ports[2][0], nodeA.ports[2][1]]);
    connectPorts([nodeB_rightDown, 0],[nodeA.ports[1][0], nodeA.ports[1][1]]);
    setInitialPositionForPivots(nodes);
}


// ----- Auxiliar functions -----
// Gets the distance between 2 points
function getDistanceBetween([ax, ay], [bx, by]) {
    return Math.sqrt(Math.pow(bx - ax, 2) + Math.pow(by - ay, 2));
}

// Add two vectors returning a new one
function add([ax, ay], [bx, by]) {
    return [ax + bx, ay + by];
}

// Rotate a vector in an angle
function rotate([ax, ay], angle) {
    return [
        Math.cos(angle) * ax - Math.sin(angle) * ay, 
        Math.sin(angle) * ax + Math.cos(angle) * ay];
}

function getRadianFromAngle(angle = 270) {
    return angle * Math.PI / 180;
}

// -- Conections between nodes --
function connectPorts([nodeA, slotA], [nodeB, slotB]) {
    nodeA.ports[slotA] = [nodeB, slotB];
    nodeB.ports[slotB] = [nodeA, slotA];
}

function setInitialPositionForPivots(nodesArray) { 
    for (var i = 0; i < nodesArray.length; i++) {
        for (var j = 0; j < 3; j++) {
            nodesArray[i].pivots[j] = nodes[i].getPortPosition(j);
        } 
    }  
}

function updatePivotsPosition(node) {
    for (var i = 0; i < 3; i++) {
        node.pivots[i] = node.getPortPosition(i);
    } 
}


// ----- Drawing ------
// Draw the initial node as a small circle
function drawInitialNode(context, node) {
    context.beginPath();
    // context.arc(port0Position.x, port0Position.y, 5, 0, 2 * Math.PI);
    context.arc(node.position.x, node.position.y, 5, 0, 2 * Math.PI);
    if (node.label === 0) {
        context.fill();
    } else {
        context.fillStyle = 'white';
        context.fill();
    }
    context.stroke();
}

// Draw the shape of a triangle according to it's ports and it's connections
function drawElements(context, node) {
    context.strokeStyle = 'black';
    context.fillStyle = 'black';

    if (node.label === 2) { // draws a black dot inside the triangle
        context.beginPath();
        context.arc(node.position.x, node.position.y, 3, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }

    if (elementSelected) {
        // Highlight the selected element
        if (elementSelected[1] === node &&
            (elementSelected[0] === "node" || elementSelected[0] === "initialNode")) {
            context.strokeStyle = selectionColor;
            context.fillStyle = selectionColor;
        }
    }

    if (elementClicked) {
        if (elementClicked === node) {
            context.strokeStyle = selectionColor;
            context.fillStyle = selectionColor;
        }
    }

    if (node.label === 0 || node.label === 5) {
        drawInitialNode(context, node);
    } else {
        // -- Triangles --
        context.beginPath();
        // Port 0 to 1
        context.moveTo(node.getPortPosition(0).x, node.getPortPosition(0).y);
        context.lineTo(node.getPortPosition(1).x, node.getPortPosition(1).y);

        // Port 1 to 2
        context.moveTo(node.getPortPosition(1).x, node.getPortPosition(1).y);
        context.bezierCurveTo(node.getPortPosition(1).x, node.getPortPosition(1).y,
                                node.position.x, node.position.y,
                                node.getPortPosition(2).x, node.getPortPosition(2).y);

        // Port 2 to 0
        context.moveTo(node.getPortPosition(2).x, node.getPortPosition(2).y);
        context.lineTo(node.getPortPosition(0).x, node.getPortPosition(0).y);

        context.closePath();
        context.stroke();
    }
    // node.ports has the format of: [[node0, 0], [node1, 1], [node2, 2]]
    for (var i = 0; i < 3; i++) {
        var portPosition = node.getPortPosition(i);
        var portPivot = node.pivots[i];

        var nodeToConnect = node.ports[i][0];
        var slotToConnect = node.ports[i][1];
        if (nodeToConnect.label !== 0 && nodeToConnect.label !== 5) {
            var portToConnectPosition = nodeToConnect.getPortPosition(slotToConnect);
            var portToConnectPivot = nodeToConnect.pivots[slotToConnect];
        } else {
            var portToConnectPivot = nodeToConnect.position;
            var portToConnectPosition = nodeToConnect.position;
        }

        // -- Drawing pivots and lines --
        context.strokeStyle = 'black';
        context.fillStyle = 'black';
        if (node.label !== 0 && node.label !== 5) {
            // Create a line (curved, if it has a pivot) from the node beeing drawn and "nodeToConnect"
            context.beginPath();
            context.moveTo(portPosition.x, portPosition.y);
            context.bezierCurveTo(portPivot.x, portPivot.y,
                                portToConnectPivot.x, portToConnectPivot.y,
                                portToConnectPosition.x, portToConnectPosition.y);
            context.stroke();
        }

        // Highlight the selected pivot
        if (elementSelected) {
            if (elementSelected[1] === node && elementSelected[2] === i) { // Pivot on a selected node
                context.strokeStyle = selectionColor;
                context.fillStyle = selectionColor;
            }
        }
        // Shows the position of the pivots
        if (!hidePivots) {
            if (node.label !== 0 && node.label !== 5) { // Initial node does not shows the pivots
                context.beginPath();
                context.arc(portPivot.x, portPivot.y, 3, 0, 2 * Math.PI);
                context.fill();
                context.stroke();
            }
        }

    }
}

