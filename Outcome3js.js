//display case title & Key Image
document.getElementById("diagnosis").innerText = localStorage.case3Title;
document.getElementById("keyImage").src = ("http://drive.google.com/uc?export=view&id=" + localStorage.case3KeyImg);
//Show Result
if (localStorage.case3Action === localStorage.case3KeyAction)
    {
        document.getElementById("result").innerText = "Success!!";
        //give 400 points
    }
    else {
        document.getElementById("result").innerText = "Uh Oh...";
        //give 100 points
    }
//Show Action Taken
document.getElementById("action").innerHTML = localStorage.case3Action;
console.log("You Chose: " + localStorage.case3Action);
console.log("Key Action: " + localStorage.case3KeyAction);
    //display image matching action
    //document.getElementById("actionIcon").src = ();
if (localStorage.case3Action === "Observation")
    {document.getElementById("actionicon").src= './ProgramFiles/Icons/obs.png'}

if (localStorage.case3Action === "CT Scan")
    {document.getElementById("actionicon").src= './ProgramFiles/Icons/ctScan.png'}

if (localStorage.case3Action === "Surgery")
    {document.getElementById("actionicon").src= './ProgramFiles/Icons/surg.png'}

if (localStorage.case3Action === "Intervention")
    {document.getElementById("actionicon").src= './ProgramFiles/Icons/intervention.png'}
//display Explanation
document.getElementById("explanation").innerText = (localStorage.case3Outcome);

//Show correct Remember Box
if (localStorage.case3KeyAction === "Observation")
    {document.getElementById("rememberBox").src= './ProgramFiles/RememberObs.svg'};

if (localStorage.case3KeyAction === "CT Scan")
    {document.getElementById("rememberBox").src= './ProgramFiles/RememberCT.svg'};

if (localStorage.case3KeyAction === "Surgery")
    {document.getElementById("rememberBox").src= './ProgramFiles/RememberSurg.svg'};

if (localStorage.case3KeyAction === "Intervention")
    {document.getElementById("rememberBox").src= './ProgramFiles/RememberInt.svg'};
//Score Calculator

