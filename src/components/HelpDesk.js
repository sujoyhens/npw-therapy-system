import React from 'react'
import { Text, SafeAreaView, View, ScrollView, StyleSheet, Button } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import { WebView } from 'react-native-webview';
import {
    MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
const theme = {
    ...DefaultTheme,
    myOwnProperty: true,
    colors: {
        primary: 'blue',
    },
};

const helpData = [
    {
        "id": "1",
        "title": "Patient Details",
        "icon": "clipboard-plus",
        "submenu": [
            {
                "id": "1.1",
                "label": "L",
                "title": "Location"
            },
            {
                "id": "1.2",
                "label": "P",
                "title": "Patient Name"
            },
            {
                "id": "1.3",
                "label": "A",
                "title": "Age"
            },
            {
                "id": "1.4",
                "label": "X",
                "title": "Gender"
            },
            {
                "id": "1.5",
                "label": "H",
                "title": "Hospital Name"
            },
            {
                "id": "1.6",
                "label": "B",
                "title": "Bed Number"
            },
            {
                "id": "1.7",
                "label": "D",
                "title": "Department"
            },
            {
                "id": "1.8",
                "label": "R",
                "title": "Doctor In Charge"
            },
            {
                "id": "1.9",
                "label": "N",
                "title": "Nurse Phone Number"
            },
            {
                "id": "1.10",
                "label": "S",
                "title": "Service Person Phone Number"
            }
        ]
    },
    {
        "id": "2",
        "title": "Live Monitoring",
        "icon": "chart-bar-stacked",
        "submenu": [
            {
                "id": "2.1",
                "label": "V",
                "title": "Pressure in mmofHg"
            },
            {
                "id": "2.2",
                "label": "S",
                "title": "Set point in mmofHg"
            },
            {
                "id": "2.3",
                "label": "P",
                "title": "Process Alarm"
            },
            {
                "id": "2.4",
                "label": "M",
                "title": "System Alarm"
            },
            {
                "id": "2.5",
                "label": "D",
                "title": "Date"
            },
            {
                "id": "2.6",
                "label": "T",
                "title": "Time"
            }
        ]
    },
    {
        "id": "3",
        "title": "Events & Alarms",
        "icon": "bell-alert",
        "submenu": [
            {
                "id": "3.1",
                "label": "I",
                "title": "Event ID"
            },
            {
                "id": "3.2",
                "label": "M",
                "title": "Machine"
            },
            {
                "id": "3.3",
                "label": "E",
                "title": "Event"
            },
            {
                "id": "3.4",
                "label": "D",
                "title": "Date"
            },
            {
                "id": "3.5",
                "label": "T",
                "title": "Time"
            }
        ]
    },
    {
        "id": "4",
        "title": "Canister Consumption",
        "icon": "beaker-alert",
        "submenu": [
            {
                "id": "4.1",
                "label": "C",
                "title": "Canister ID"
            },
            {
                "id": "4.2",
                "label": "D",
                "title": "Date"
            },
            {
                "id": "4.3",
                "label": "T",
                "title": "Time"
            }
        ]
    },
    {
        "id": "5",
        "title": "Foam Consumption",
        "icon": "cloud-print",
        "submenu": [
            {
                "id": "5.1",
                "label": "F",
                "title": "Foam ID"
            },
            {
                "id": "5.2",
                "label": "D",
                "title": "Date"
            },
            {
                "id": "5.3",
                "label": "T",
                "title": "Time"
            }
        ]
    }
];


const HTML = `
<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<meta name=Generator content="Microsoft Word 15 (filtered)">

<style>
<!--
 /* Font Definitions */
 @font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;}
@font-face
	{font-family:Tahoma;
	panose-1:2 11 6 4 3 5 4 4 2 4;}
@font-face
	{font-family:"Britannic Bold";
	panose-1:2 11 9 3 6 7 3 2 2 4;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:0in;
	line-height:107%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;}
p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:.5in;
	line-height:107%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;}
p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParagraphCxSpFirst
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	line-height:107%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;}
p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListParagraphCxSpMiddle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	line-height:107%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;}
p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagraphCxSpLast
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:8.0pt;
	margin-left:.5in;
	line-height:107%;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;}
.MsoChpDefault
	{font-family:"Calibri",sans-serif;}
.MsoPapDefault
	{margin-bottom:8.0pt;
	line-height:107%;}
@page WordSection1
	{size:595.3pt 841.9pt;
	margin:1.0in 1.0in 1.0in 1.0in;}
div.WordSection1
	{page:WordSection1;}
 /* List Definitions */
 ol
	{margin-bottom:0in;}
ul
	{margin-bottom:0in;}
-->
</style>

</head>

<body lang=EN-US style='word-wrap:break-word'>

<div class=WordSection1>

<p class=MsoNormal style='text-align:center'><span lang=EN-IN style='font-size:
34.0pt;line-height:107%;font-family:"Britannic Bold",sans-serif'>User Manual </span></p>

<p class=MsoNormal style='text-align:center'><b><span lang=EN-IN style='font-size:
20.0pt;line-height:107%'>NPWT-22-MVAC </span></b></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>&nbsp;</span></p>

<p class=MsoNormal align=center style='text-align:center'><span
style='font-size:14.0pt;line-height:107%'><img width=558 height=436
id="Picture 1" src="data:image/jpeg;base64,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"></span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>1.0 <b>Machine
Specification of NPWT-22-VACM </b></span></p>

<p class=MsoListParagraphCxSpFirst style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>A)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>Pressure Control Range:   0-185mm
of Hg( )</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>B)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>Set Point is Configurable
from the front Panel</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>C)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>Accepts Canister of sizes 500ml,
and 250ml</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>D)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>Continuous and
Intermittent modes of operation</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>E)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>Host of audio visual
process alarms. </span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>F)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>Systems Alarms for
diagnosis of Hardware faults. </span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>G)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>Secured canister handling
through RF-ID Tracking. </span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>H)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>Event logging for
fault/operational traceability. </span></p>

<p class=MsoListParagraphCxSpLast style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>I)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>Data communication with
Host Computer.</span></p>

<p class=MsoNormal style='margin-left:57.0pt;text-align:justify'><b><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>1.1 Design Features</span></b><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>:</span></p>

<p class=MsoListParagraphCxSpFirst style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>A)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>Designed around High
Performance Mixed Signal Processor from Micro-Chip. </span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>B)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>16MB external flash for
data storing. </span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>C)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>5” industrial grade TFT
display with Resistive Touch Pad</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>D)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>Industry Standard Pressure
Sensors for Pressure measurement. </span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>E)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>RTC module for real time
records. </span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>F)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>RF-ID Based Canister
Detection and Selection Process </span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>G)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>Blue-Tooth (BLE &amp;
Bluetooth 2.0) interface for Contactless Patient Data Transfer. </span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>H)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>Wi-Fi Interface for remote
monitoring and control of the device through Cloud Based Application. </span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>I)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>USB Interface to exchange
data with a Host M/C</span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>J)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>High Quality Low noise high
efficiency BLDC motor based Pump for pressure control: 10,000 hours operating
life. </span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>K)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>Pump current monitoring
and Fault sensing utilities. </span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>L)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>14.8V 4800mAh, Li-Ion
based power source for 6-8 hours of operation. </span></p>

<p class=MsoListParagraphCxSpMiddle style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>M)<span
style='font:7.0pt "Times New Roman"'> </span></span><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'> AVS based handy Moulded enclosure.</span></p>

<p class=MsoListParagraphCxSpLast style='margin-left:75.0pt;text-align:justify;
text-indent:-.25in'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>N)<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span></span><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'> Weight: 1kg. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'> <b>Operational Features</b>:</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>2.0 The NPWT is essentially a
pressure controlling equipment which tends to control and maintain a constant
negative pressure at the remote end of patient's body. The Canister provides a
direct contact with the patient's body through tubing and the sensa trac. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>2.1 The Device is having a total of
four Display Screens: a) A Start-up screen which displays a Spinner. The
initialization of various parameters take place here. Certain configuration
parameter/ settings etc. are loaded on the CPU's memory from the Flash. The
Screen persists for a short while and then the second screen appears b) The
Second Screen Display's the Company's Logo on to the screen. This screen
displays Momentarily and persists for a few seconds.  Then the third window is
displayed. c) The third window may be considered the main window of the device
which provides the operational features and provides the means of Control and
Monitoring of the pressure. d) The fourth screen is a text processor screen which
enables the user to set Patient's details, date and time for the RTC and also
the brightness of the display. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>2.1.0 The Control Window: This is the
main window of the equipment. This has been designed to provide ease of control
to the user. The window contains a Slider at the bottom. The slider enables
user to fix the set point of the pressure. Apart from this there are three
other control functions are available in this window. A Start/Stop button is
kept at the left bottom corner of the window which works in toggle mode. The
Caption on the button changes according to selection. The other control button
is placed at the right button corner of the screen for Saving the Pressure Set
Point. The Save and the Slider Control will not work if the M/C is in Start
mode. So, it is possible to change Set point and save it only when the M/C is
in Stop condition. After the Save Button is executed the Set Value becomes
effective set pressure value at the same this value is saved in the local
flash. Therefore, the M/C can be brought to pressure control operation
immediately after power up if there is no requirement to change the set point. 
 A MUTE/UN-MUTE Button is provided for muting/un-muting audio alarm. The
“REPORT” Button has been provided for dumping the EVENT-LOG database to a Host,
connected through USB port available in the device. However, this key will work
only when the M/C is not in operation.  A “MODE” Button has been provided to
select either a continuous operation or intermittent operation. When intermittent
mode is selected, the “ON” and “OFF” intervals may be selected by adjusting the
slider for a max of 10 min duration for “ON” as well as “OFF” duration. Once
durations are set the same can be save using “SAVE” button. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'> The last control Button is “SETTINGS”
which takes the user in the fourth window, i.e. the Text Editor Window. </span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>&nbsp;</span></p>

<p class=MsoNormal align=center style='text-align:center'><span
style='font-size:14.0pt;line-height:107%'><img width=400 height=246
id="Picture 3" src="data:image/jpeg;base64,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"></span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>                                   
<b>Screen Shot of the Control Window</b></span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>&nbsp;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>2.1.1 The Config Window: This is sort
of text editor window. This allows user to set and save the following data set
related to the Machine, Patient, Deployment location etc.  </span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>       a) Instrument
Serial No: This is a 10 digit number containing the unit serial number of the
instrument deployed. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>       b) Name of the
Locality: This field accepts a 15 (Max) character alphabetic name for the
location where the instrument has been deployed. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>       c) Patient's Name:
This is a 20 (Max) character long string for registering the patient's name to
whom the equipment is being applied. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>        d) Age: This is a
three digit numeric entry. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>         e) Sex: Only any
of the three alphabets- ‘M','F', ‘T' are acceptable in this field signifying
‘Male', ‘Female' and ‘Transgender' respectively. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>         f) Name of the
Hospital/Home treatment: This field is having a 15(Max)characters string
indicating the Hospital ‘s Name. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>         g) Bed No: This
is a three (Max) digit field. In case of home treatment 0 need to entered. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>         h) Department: A
five letter (Max) has been assigned to this filed to indicate an abbreviated
name of the medical department involved in the treatment. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>        i) Name of the
Doctor: A twenty (Max) character field has been kept for this field to register
the Doctor in Charge's name. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>         j) Contact No of
the Nurse: This is for entering mobile contact number of the Nurse looking
after the patient. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>         k) Contact No of
Sales Rep.: This is also a mobile number meant for the Sales Representative who
may have to be contacted for any technical servicing/support of the equipment. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>2.1.1.0 <b>Entering
patient data</b>:  Entering of data is enabled when the leftmost command
button, Main Menu Selection Button, shows SET. In general, all data fields are
to be filled up on by one. Name of the current item is displayed on the caption
of the Item Button of the window. Scrolling through the lines is possible
either by pressing the Item Button itself or by pressing the NEXT button. The
data can be filled up in any order. Error will be generated if undesired letter
is typed in the respective fields. The error string is displayed just above the
parameter line which is being typed in. All fields have their respective max
character limit beyond which the system will not accept. However, this limit
has been kept as optimum so as to express give a meaningful version of the
respective parameters. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-indent:-.5in'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>           Only uppercase letters are
allowed along with ‘&lt;' and ‘&gt;' control characters. No special characters
are enabled. The left and Right arrow Buttons can be used for editing the typed
string. After all the fields are typed in, the ‘SAVE' Button can be pressed to
save the entered patient data set. System will not allow any data set to be
saved unless all the fields are filled up. After the SAVE command is accepted by
the system a message will appear on the screen “Patient Data Saved Successfully”.
Data is saved in external flash memory. <b>The Data set, once saved cannot </b></span></p>

<p class=MsoNormal style='margin-left:.5in;text-indent:-.5in'><b><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>           </span></b></p>

<p class=MsoNormal align=center style='margin-left:.5in;text-align:center;
text-indent:-.5in'><b><span style='font-size:14.0pt;line-height:107%'><img
width=400 height=242 id="Picture 8" src="data:image/jpeg;base64,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"></span></b></p>

<p class=MsoNormal style='margin-left:.5in;text-indent:-.5in'><b><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>&nbsp;</span></b></p>

<p class=MsoNormal style='margin-left:.5in;text-indent:-.5in'><b><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>                            
Screen shot of Configuration/Setting Window.</span></b></p>

<p class=MsoNormal style='margin-left:.5in;text-indent:-.5in'><b><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>&nbsp;</span></b></p>

<p class=MsoNormal style='margin-left:.5in;text-indent:-.5in'><b><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>           be either
edited or deleted. Deletion of data is possible only when the flash is full and
this can be possible only through an authenticated access</span></b><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>       2.1.1.1 <b>Entering
RTC Data</b>: RTC plays a very important role in the patient data record
system. The RTC module is a battery backed up system which keeps the Clock on
even when the device is powered off. So, it is only required to set the RTC data,
i.e. Date and Time information only once. However, depending up on the
correctness of the time data shown in the display, the Time parameters can be
set at any time whenever required. The formats followed in this case: Date
dd/mm/yyyy, Time: hh/mm/ss. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>       2.1.1.2 <b>Event
Recording</b>: As the name suggest event is basically an activity which is
being performed on the system. An even can be generated in any the following
cases:</span></p>

<p class=MsoNormal style='margin-left:.5in;text-indent:-.5in'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>                    a) Registering a
patient data set. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-indent:-.5in'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>                    b) Registering a
Canister in the System. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-indent:-.5in'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>                    c) Putting the
system in ‘START' mode in the Control mode. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-indent:-.5in'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>                    d) Putting the System
in ‘STOP' mode. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-indent:-.5in'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>                    e) A fault has
been detected in the system. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-indent:-.5in'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>                     f) An alarm has
been detected in the process of pressure control. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>                  All
different types of events are given unique two letters code for identification.
Events are stored in the specific section of the external flash memory in order
of their occurrences. All events are time tagged with RTC clock. The format
followed is:  #&lt;two letter event codes&gt;# dd/mm/yyyy, hh/mm/ss. Events are
generated and stored of their own without any intervention of the user. Events
cannot be erased in any case.  </span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>  2.1.1.3 <b>Canister
Management</b>: This is the last item of the main menu. Each Canister is to be
registered first with the device before using it. After the canister is
attached with the device, the Cannister menu is to be selected. Then ‘READ' item
menu is pressed. This is responded with a either ‘Success' or ‘Fail' alert
message on the display. After the success message is displayed on the screen press
the ‘NEXT' button to get the ‘REGISTER' mode appear on the item Button. Now
press the REGISTER button to the register the attached Canister with the
device. During the run operation of the device the presence of the registered
Canister is verified intermittently. The system will stop working if the
registered canister is not found in place. Once a canister is replaced, the old
data is replaced with new one. The canister data format: &lt;Tag Original
Serial no(5 bytes)&gt;&lt; Canister Batch Number (16 bytes) &gt;&lt; Canister
Serial No1&gt; &lt; Canister Serial No2 &gt;. Canister data is stored in a
specific location in Flash Memory. The provision has been kept to ensure that
no canister is in use beyond 4 day's to ensure good hygiene of the patient.
System cannot be run with such canister. </span></p>

<p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>  2.1.1.4 <b>Retrieval of
Records:</b>  The retrieval of Patient Records can be done when the main menu
selection Button is set to ‘GET' mode. In this mode the item Button will indicate
the parameter which is on the display. Each record pertaining to a patient can
be seen one at a time by pressing the item Button repeatedly. This is circular
mode of reading, means the same data set for a particular patient can be viewed
again and again for unlimited time. On the other hand when there are number of
patient records are available, the new patient record can be loaded for reading
by simply pressing the ‘NEXT' Button once. If there is no more patient record
set left in the memory, a message will be displayed “End of data”.  Similarly,
it is possible to read RTC data, i.e. Date, Time etc. For viewing of ‘EVENT'
data we need to select ‘EVENT' from the main menu Button.  Then the item Button
is to be pressed again and again to view all different events for the particular
patient. </span></p>

<p class=MsoNormal align=center style='margin-left:.5in;text-align:center;
text-indent:-.5in'><span style='font-size:14.0pt;line-height:107%'><img
width=396 height=266 id="Picture 9" src="data:image/jpeg;base64,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"></span></p>

<p class=MsoNormal style='margin-left:.5in;text-indent:-.5in; text-align:center'>
<b>Screenshot of the Start-Up Screen</b></p>

<p class=MsoNormal style='margin-left:.5in;text-indent:-.5in; text-align:center'><b><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>
</span></b><b><span style='font-size:14.0pt;line-height:107%'><img width=400
height=299 id="Picture 10" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAErAZADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDjt1KGqHdS7q+puchNupQ1Q5pd1FwJg1LuqHdS7qdwJt1KGqHdSg0XETBqXdUO6l3UATBqN1Q7qXdTAl3Uu6od2KXdTES7qXdUQajdQBLml3VFupQxpiJd1LuqHNLmgCXdml3VDupc0wJt1KCKh3Uu6gCUGl3VEG4o3Zp3FYlLUueKh3Uu6ncLEm6l3VFupN3NFwsTbqTdUe6k3UAS7qTdUe7mk3UASbqMiot1G6lcLEu6kLVHuoLUDsP3Ubqj3Um6kBJupCajzSbqAJN1IWphamlsUDJC1NLVGWpCxoAkLU0tUZakLUrgP3Zppamk00tU3GN2ml2mptlKI6mwyHbS7TUwjpwjosBAFp22phHS+XTsIg2ml21OI6Xy6dguQbaXbU/l0vl0WC5BtoCmrAjpfLosK5XC0u2p/LpfLp2Ar7aXaaseXSiKnYVyvtpdpqfy6UR0Bcr7aXacVY8ujy+aYivsNKENWBH7UpjosFyuF5pSvPSrAjoEeTQBX20oX2qwY/aneVigCrt5pStWRHSeXTArhaTbVry6Ty6AK22jbVkx89KPK4pgVttJtNWvLpPLoArbTQVNWfLo8ukMq7TSbateXSeXSArFTSbTVny6Ty6AK22k21ZMdJ5dAFYrTStWjHjtTSlFgKxWmlasmOm+XSsMr7abtqyUpuyk0BXIppU1ZMdNKUrDJAKcBTd1KGoAdinAU0NSg0AOxSgU3dShqYDgKXFJupd1AhcUuKQNS7qAFApcUmaXdQAYpQO1G6jNMQu2lxSZzS5FAh2KXbSbs0buaYC4pQopNwpd3FAAFFLjmgEYoB5oEKVpVUYpM80pbFAxcUEUK1JuzQIdjApAtBagNTGBFGKTdS7uKBBjmgijdRupgGKTFGaQtSGLikxRuo3UgArSEUbs0m6gYbcU0ilLUhagBCKQilJppagBCKTFKWpu6mA0ikNKWpu6kAhFIRSlqaWpDExTSKcWppakBXDU4NSBacFqSg3U4NSbcjmnbaBAGNOyaQLTgtMAzS7jRtpdtABupdxoC0u2gQgNO3UbaXbTAN1Luo2U4JmgBAaUNS7aXbQIQNQGpQh9KUJxTAQNS7snil2GlCE0wEyaXOAKAnNKU7UCEDc0pbJpQnFIqZ5oAXdgYFIGNKU6U7ZxQAwtml3YFLszSleBQA3dQWpwQ56Um3rTAQNRup2zikKUgEzTd1P2UmygBu6k3U7ZSbKBibqTdTtppCpoAbuNJup2ykKUANLU0safspChoAYWppanlKaVNADCaQtTypppWkMYTSE04rSFKQxhamk08qaQrSAkEdKqZqXFOAoAi8unCOpQKUCgCIR04JUuMCnAUxEPl07y6lApwHNAEIjpfLqUYpwFAEIjpwjqbbS4oEQiOlEdT4pcCgCHy6BHVjFGKAIfLo8up9tOC0AV/K7Uvl4FT7eaUjtTAriKgRZNWCvFKq4FFxEBipRDxU2MmnHpzRcCsIsmlMeKnUd6U9cUXEV1joaPpVkcdqb1NFxkIjxSeXVkjimgZoAh8rik8urBpAKAIDFTfLqyRSYoAr+XSeXVkjikxQMrmKmmKrOKTFAit5dIY6s4ppFMCuY6Ty6sEUh4oArlKaY6sEUhFAyt5dNMdWSKaRSArmOmFKskU0ikMrlKYUqyRTTQMiDUoaoAadmpAnDU7dVcNTg1MRYDU4NVcMaUMaALG70pQ9QbqUMc0AThqcHqANS7jQBYDUoaoNxpd1AE4anbqg3Gl3UAWA1G6oQxpQaYibfTtwqANRuOaAJw1ANQ7qXdjFAExbnrS7uKgDHrSl+1AEyvzQ0mTUIbApA2TQIsh9qmmh81CWIpVJoAnZ8UgaoWYkjilBwKAJWfA60BuKgL07d0pgSl/egPzUG72pd3emBKXFG6oCxNKGOKQEpek3VEWNG6gZKWpN9RFjSFjQBKX4ppbNRbjSbjQIk3Um6oyx600tQMk3UhaotxpC1AEm6ml6jLU0saQyQtTS1RljTSxoAkLU0tUZY00saQxgWnhamEdOEdICDaacFqfy6cI6YiALTglTiOlEdAEAQ04IasCKlEdAFcKT2pwSrAjpwi9qAKwSnbKseXSiOgCuEPpShDVnyqUR0AV9hpdhxVkRUeXmgRX2GlCGrBjJHHXtThFgUAVttBU+9WhFk0GPmgCsE4o2ZbpVny+OlKIjmi4FYofShYzVnyzmneXgUXAplTmnBDirIiBOaVoxRcCpsyacUxVgRUrRii4ioE5pSvFWViPpQYz0xTuBUCH0pxQ+lWhFQYuKLgU9h9KNhq15ftS+WMU7gUylGyrRio8ulcZUKGkKmrZjpDFRcCnsNIUNXPKppjouBUKU0oatmKkMdAFTZTSpq2Y6aY6AKhU00qatmOmmOgZTKmmlTVsx00x0AVCppCtWTHSeXSAcBTgKjD04PQBIBzTwKiD04PzQBKKcBzUQenB6AJRTgKiD4p4egB6ingVHvpwekA8ClApm/pS76BEgGaWow9OD0ASUuKj30u+gCQClxUe/3pd/NAEgHpQAc0zfShuKAH4pccUzeM9aa06AH5hRYLpEuOaGGMCoY7iN2KqwLDqKUy888UWYXTVyUKKRutRfaUX+IUquTz2pWYk09iUDim9TSNJjPNNV+Cc8Uhkw45rNuNc0+2naGa4UOpwRgnFZuv+IVt1NtayDzujMBwv/16ytJ0OTUN01yzLG3IPc+9c1Su1L2dNXZ00qC5eepojpP+Ek0sYzdL/wB8mk/4SXS24+0j/vk1STwparKrs7sB2NR/8IlbAnE0nNHNibbIOXD33Zs2eq2V85S3mDuBnGO1XDXBX2n3WiXImhLBQfkkH9a6TR9dj1CIIzAXCj5l9feqpYhuXs6itIVWglHnp6o2KMetM3570u/3rqOcXFNIpC9IXoAU03FG+ml/egBSKaRSF6QvSGGKbigvTN/vTAU00ikL00vQApphoL0wvTAUimmkL00vQBWDGlDGkCGnBTUjFDGnBqQIacENAhQ1PDGmhTTgppgODGnK1JtPpTghoAUMeTTgTSbO1O2HpQABqcGOaAlKEIFIA3E0u40BDShCaAEDUoalKGlCGgA3HtShjQFNLsNAgDGlL4X6UbSKoyala/afspmAlYYA96aVxNjPNnvblgjbbdeCw6k1SuGQ3YtrcsZCeuTxSy3FxpVtMkqr5eSyOG5JPbFZlr9ojsJtSLAOGwhP61sloc7inq/68jVjmexvgpIIbGc9asajcyoQoOEPcVhI7PCdRuJSdrYCepqaya41KVpp5NsCcuc9BVctncXI+VxReTaUVirSEnkq3StPTvOWFvNyAD8meuKzIFtJb2EL56CRv3ZIwGNb+wgVlOXQujTtqRs2TWFrmuta5tLZsTfxNj7orf2HJrh9dXOvXA77xx+ArixdSVOneO534aCnPUn0rR5btxPdA+WeVB6sfWuj027SXfCFCSxHayelWYYtsMYAAwornLIyjxLepGfnw2M9M1MIKgo26vUcpOs5X6LQ6G9v4rKHzJm2r0HHU1mr4otCuSJP++ao+IFuF0iL7S2X83sc9jVyC3YafamGGNtyjJ2j0qpVZubhHSyuJU4KHNLW7JRfprC+Sts7Qn7zsMAVz19YT6Pd+fESEz8rf0NdrHEFjACBeOgFUtahD6XPuUdMinVoe1h7z17hTq8k/dWhDo2sDUItrH98g+YVp7ia5XwkpN/Px/yz/qK6zYaeFqSqUlKW4sRBQqWQzcaQsadsOaQoa6DEZuNIXPpTihpCtIBm40hY07ZSFaAGFqYWNP2H0ppSgBhY00saeUNNKGmAwsaaWp5Q00pQMYWNNLU4oaQqaAJAntTxHTxThSEMEdO8unj9KeKAIxHmniLNPXpTwKBEax08R08U8YoAjWLvThHznFSY7Uo60DI/Lp3lZqQDApwFICLy/wBKUR47VLjNHegCMR57UpjqUCgA0ARiLFHlVNiloAgeLKkdyK41LddJ1iaTUoJJFJ3wso3DOa7nFI0auMOoI9xVKViba3OHkhvfEmoBkjeO3BwC3AX3+tXfENmbLSILa3jYpu+baM5rrFQLgKAB6CnMoPBANP2jvcHDRJHAR6NqUukuxTbAPnVD94n6VNo+p2lnbTWeoROFdsn5c/ga7nAqCWytZX3Pbxs3claftbqzC2phWmdXvrae2jKWVu2QWGCxA4wK32j46VLHGsaBUUKo6ADikPNZOV2UklsRLEfSuG1UiLxVcM0ayL5gGG+gr0AL6/nXAeIEMOvTO6naz7x7jFceMb9nfzR14KzqWfY7RIvkUgdq5/VPDsj3c13BOI9/JycYrf029hv7RJYTwR0PUH0qhqmuWCeZbSiRyDhgi5AP1rafJOK5tjGnzwm+VanK6npt1aWsc88wmjZtq/MTzirltoOoPbwlbsIHUFV8yjVr+3vdOhtbOOUbZN53L14rpINOEltZmRirxovT6VyQpwlVdu3c66lWcaa5tNTF8Oy3a6tcWdxK0gjU8E55Brc1MJHYTNIgdQpypPWszT7Z7XxXdb+kiFlPrk1b8RX0FrprxSHLyjCrXXS9yL5ntc56i56keXrYxPCAV9SuSqhQUyB6c11xjrlPBan7dckA48vrj3rsDUYJ/uh4v+IQGP2pPL9qsYpprqOYgMdNMftVgim4oArmOm+XVg0hoArmOmmP2qc02gCuY6aY/arBppFAyuY6aYvarBppFAisY6aY/arJFMNMCEPSh+arhqUNQMtb6UPVcNTgxoEWA/NPEnvVYNxmlDUAWw/enB6rBuKcGIoAsiTmnh+aqb6eHNAFnzKXfxVYMaUMaALIelD5qvuNKGOKQix5lOD1WDUu80AWQ9KHqrvpd5oGWd9G+oNxoDGgCwHo35qDcaUMaQFjfgU0OSetQlj60bsUATtJxSK+agZs0oJApWAsNJgdKztS0+HU7cxyLh/4XA5Bqd3OKVD7mk4pqzBNp3RxUdzc+HdSaNiSmcMo6OPUV1emy2d5aiW3hQK3LAjkH3pupafFqNu0cgAfqrkcg1yAi1DS7x0h8xWB/hBww9a4rPDvvH8juTjiI72kd8sEGc+SmR04qUuAOFrhoNa1SGYNL5roOq7aY2uatk/Ow9ttWsVTtez+4j6rNvdHTaxqVvp4SSRd03IQDrXMWltc+INQdpHO3OSx6AegqO0sbrWLwtM7Y6sz/wAhXZ2dtHZwrHEoAAxwOtQubEvtH8y244aNlrIlsrSHT4FjhUKAOSO9Tl6hLGm7ia7oxUVZHE227sn30m+oN1IWNMRMXpC9Q7jTdxpgTF6aXqIsaaWNAEpeml6i3U0saAJS9NL1EXppagCUvTS9RFqaWNAEpemF6jLGmlqAGBDTguamEVOEdAEISnBTUwjpwjpgQhO1OCGphHTxHQBAENPC1MI6eI6AINlLtqwsdKI6VwINnFKFNWNlL5dAEG00u01YEeKXy6BFfZRtzVny6UR0AV9tLsqfy6cI+tAyvspQlWPL5pfLpAVtppwSpxH9KUx8dBRcCt5eaCh9KtCOhkpXAqBSTTimB1qcR0rJSuBUKZPrTlT0FWBGT2pxjouIpspoEQPJx+VWGjpyx47UXAg8lfQY+lMMK/3R+VXCnHam7PpQMqCLB4UD6Cn7DxVny+aPL9qdxlUrTdlW9ntTTHTAq7DSFTVox03y6BFUqaQrVrZSeXQBV2U0oat+XTTH7UxlQoaaVNWzHTTHQIqFTTSlWzHTTHQBUKmmlDVsx00x0wKm2mlTVox00x0gFHrThUIftTw9AEopwqHfTg9MCYCnioA9PD0AT98UoqEPTw9IRNThUO/ml30DJacBUW6lD0ATGlHFQh6XfSAmHNLUPmYFKJM0ATDml9qi8w0u80ASilqHzDS76AJgaO9ReZzSh6QEh4FNyaaZKTdSsBP29qjPJphk/OkD0rATACg8UwSEUwyc9aLASYzTjx9ahD07fRYQ849KQfSojJRvosMnApDUYekL07DH8UVEZO1HmU7ASYppppkphegRIabTN9J5lMCQ0maj30hegY8000wyUhkoEONNIppemGSmA8imGmmSmmSgBTTTTS9NL0wKoY04MaTYacEpACtTt3FIENOCUwFDd6cGNAQ04R0AKGOKcGOKQJTghoAUNTtxpNhpwT0pAJuNO3GgLSiPNMQbjS7jRsOacE70AJk8U4Me9JsNKF4zzSAXcaUNQE4pdhoGJvNODGgIc0uw0AAY5o3ECjZQUyKAE3GnbzigRnvQV4pANJJpQSKUIc0uwigBpcim780pTPehU+tIBdxpC5p+zAphQ0ANLZpwY+lGw560bDnvTAN5prMT16U4qfSm7Sc0AN3H0pd2e1G0+9GwigYFjTCxp5SmlDQIbuNJupdpo2HNMBu6k3GnFTTStACFjTCxp5Q00oaAGFqaWNPKGmlDQAwsaaWNPKmmlTTAYWNNLU8rTSppDJglKI6etOFAhojp3l04U4UwGiPvineXTgacKAGhKcI6fS4pANCUuyn04UAM8ulEdPFLQIb5fFLs9qf0petAxgj9aPLqSlHFADNlKI80+lFIBvl0eXx0p9OGCKQyLZigR1J+FKOKVxEZj/OmlMmpjz3pAM9qLgMWP60pj4p44pM+9AyLyj6Uoj4qUY60EYpXAi2Y+tJ5eakJopgR+V7Uvl4qSkNAiIpTfL9qlNH40wI/LpPLqXtSZoAiMfNIY6lPrSGmMh8v2oMdSmkNAEWymlKlNIaBEXl00x1LmkoAhMdNKVMTTTTAhMdMKe1TmmnpQBAUphSpzxTWoAgD04P71WDGnBjTAtB6cH96qhjmnhjQBZElOD+9VQTTgxpgWhJTg/vVVWNODGkBZ8yneZVUMaXfzQBaD+9L5me9Vtx9aAxoAt+ZzS+ZVUMaXcaQi15lKH4qsGNKGNMCyHpwkqpuNLuNIZa8yl83FVQ5NLupWAsiQZ96UycVWDHFG40WAsCT1NODjFVQaUsR7UrATmTrTQ9QFj60oJp2AtB/ehpKrbiKbuNKwFjfmgSdar5JpdxFOwFnzPemmQVXLGkLE96LATmTmjzPeq+5qCxoAslxim+ZUG40hY0ATmSk8z6VAWpN1Aycye9IZPeq5Y0bqYE5kpnmD8KhLH1ppJzQInMlNMlQEmk3GgCfzKaZOc1BuNIWNAExkppkqEsaaWNAExemGSoixppY0wEC04JUoSnBKAIwlO2VKEpwSgCILTgtShKcEoEQhKcEqYJzTglAyAJS7DVjZRsoAg2Yp2w1PsFLsoAr7CKcE9qn2e1KEpARbDQE9qn2e1OCetAFYKaXZVjy6Xy6LgV9h9KXYan2c0oT2pXArlPrShD1qfZnFKI6LjINmKRlqyU56UgjzSAr7DS7Pwqz5dIY/ai4FYp6Umw1ZKUBKdxEASk2Va2e1NKUrjKu0mjb7VY2UojpgVihNBSrPl+1IUoArbDSFKsCMgYNBSgRW2Umw96s+X7Unl0DKxQ03ZVopSFKYiqUNNKGrWymmPPagCrsNIUNWvLppSgCrsNIUNWilN2UwKpSmlKtFKaY/agCqUNMKGrZj9qaY6AEBpwqsJacJPfmgC0DTutVhLTxJQBZBpQ1VhJSiWgRaDU4Gqvm04Te9AFoGlzVYS07zaBljNOBqt5tL5tAFgHmnZ9arCX3oEvvQBaHanZqqJacJaVgLAbkUuc+9V/NpRLSsBYzS596r+bQJOetFgLINLmq/me/NHmUrDJ80VCJKXzO9FgJun0oJqAy0nm+9FgJxS5qDzPelMtFgJtwppNQ+b70ebxRYCXNLn3qHzKTzcd6ALGabmofN96Qy0ATZ5pp5qLzaPM96YEuaSovM96b5tAExNNJFRGWm+ZTETZpuaiMtIZfegZKTTSaiMlIZKBEppuai8ykMlAEpNNJqMyU0yUAPJphNMMnvTS9MDPDn1p4kNQDrTxSAnDmnhzUA608UwJd5o3mo6O9AEoc08OfWoe9OFAEwc+pp281FSimIlD0eYajHWnAUDHq5wPWnBzUOelPHSkBLvpQ5FRA5qTHAoAdvpd/vUWTSjpQBJvIPWnCQ1CTinCkBLvNKHNRU5eooAk3mgueOaTHFRtQA8uaXcajFLSGSBzRvqOigB+80m8009KQng0ASbyPWkLmm5pDSAXzCaXecdajNApgPDmjccU3tQe1MQu84ppc0NwajbtQA7efWkLmm0dqYC7jSFzRSYpABY03eaDTD1NAxd5o3mmmkFADixppY0GmnpTACxphalPSmtQB/9k="></span></b></p>

<p class=MsoNormal style='text-align:center'><span lang=EN-IN style='font-size:14.0pt;line-height:107%'> <b>Screen
shot of Splash Screen</b></span></p>

<p class=MsoNormal><b><span lang=EN-IN style='font-size:14.0pt;line-height:
107%'>&nbsp;</span></b></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>3.0 Alarm Reporting:  </span></b><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>There are two basic types
of alarm indications provided in the device. The first type is “System Alarms”
which are generated from malfunction / erroneous operation of hardware/
firmware. The second type of alarm is process alarm which can only be generated
only when the device is in operation. Alarms are treated as “Events” and
naturally all events are stored in the specified location /page in the external
non-volatile memory with time tag &amp; type of alarm the device has
encountered.   Alarm may be generated and go away / cleared of its own if the
fault conditions is rectified / removed somehow. However, system alarms may not
go of its own as these are caused due to device hardware problem. Only one
alarm will be reported for each group at a time. If multiple alarms are happening
simultaneously than only severe one will be reported first. And the remaining
will appear only when the previous one is removed / cleared. </span></p>

<p class=MsoNormal><b><span lang=EN-IN style='font-size:14.0pt;line-height:
107%'> All alarms are supported with Audio annunciation. A mute option has been
provided in the control panel which may be enable if sound alarm is not wanted.
</span></b></p>

<p class=MsoNormal><b><span lang=EN-IN style='font-size:14.0pt;line-height:
107%'>3.0.1 System Alarm</span></b><span lang=EN-IN style='font-size:14.0pt;
line-height:107%'>:  Battery and Pump are the two important hardware part of
the device. And device internal flash is also a Critical part as it stores
important parameters for device operation. System alarms has been organized in
the following format. </span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'> 
Motor Current HI:  Recorded as:   #MH#&lt;Date&gt;&lt;Time&gt; </span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'> 
Driver Fault          :  Recorded as:   #DF#&lt;Date&gt;&lt;Time&gt;</span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'> 
Battery Low         :  Recorded as:   #LB#&lt;Date&gt;&lt;Time&gt;</span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'> 
Temperature HI  : Recorded as:    #TH#&lt;Date&gt;&lt;Time&gt;</span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'> 
Flash Error           :  Recorded as:   #FE#&lt;Date&gt;&lt;Time&gt;</span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>It
is to be noted that Low battery alarm will be generated when the Battery
voltage is in the proximity of 13 V. Connecting charger will remove the alarm.
But in case of Driver fault the Pump will not work at all. So it will not be
possible to run the system in such case. If simple power ON/OF exercise is not
able to reset the problem, please contact service centre for resolving the
problem. </span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'> Although,
pump can still be in operation with this alarm, it is recommended to recheck
any obstruction in the suction channel near the canister. In case of Flash
Error, it is recommended that new patient data should not be attempted. The
System can still be run with event logging but data cannot be viewed in the
screen. It is recommended that the device can be sent for servicing in such
case.  </span></p>

<p class=MsoNormal><b><span lang=EN-IN style='font-size:14.0pt;line-height:
107%'>3.0.2 Process Alarms</span></b><span lang=EN-IN style='font-size:14.0pt;
line-height:107%'>:  As the name suggest, these alarms are related to the
operation health of the various parameters sensed during the execution of
pressure control loop.  However, there are a few entries in this category which
have no connection with the process, e,g an Event when a Patient Data is
successfully registered in the system or an Event when a new Canister is
registered for operation etc. The different types of alarms considered in this
group are listed below: </span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>Patient
Created:   Recorded as:   #PC#&lt;Date&gt;&lt;Time&gt;</span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>Process
Started:   Recorded as:  #ST#&lt;Date&gt;&lt;Time&gt;</span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>Process
Stopped:   Recorded as:  #SP#&lt;Date&gt;&lt;Time&gt;</span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>Canister
Leak      :   Recorded as:  #LK#&lt;Date&gt;&lt;Time&gt;</span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>Canister
Blocked:   Recorded as:  #BL#&lt;Date&gt;&lt;Time&gt;</span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>Canister
Full        :   Recorded as:  #CF#&lt;Date&gt;&lt;Time&gt;</span></p>

<p class=MsoNormal><span lang=EN-IN style='font-size:14.0pt;line-height:107%'>Canister
Replaced: Recorded as:  #CR#&lt;Date&gt;&lt;Time&gt;</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>If there is no alarm exist in the
group “No Alarm” appears in the Control Window. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>In case of canister full alarm the
system will generate event which will be recorder in to the flash and system
will go into auto switch of to prevent any spill over of fluid inside the
system. </span></p>

<p class=MsoNormal style='text-align:justify'><b><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>4.0 Safety Instructions: </span></b><span
lang=EN-IN style='font-size:14.0pt;line-height:107%'>One must adhere to the
following instruction during operation of the device:</span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>  1. Don't try to plug-out / Remove
the canister when device is in operation. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>  2. Don't abruptly switch off the
system from ON/OFF switch when device is running. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'> 3. Don't remove/connect USB cable
with any HOST in device power on Condition. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>4. Recharge the battery in regular
interval and stop running when Low Bat alarm if activated. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>5. Remove the Charger when battery
is fully charge. </span></p>

<p class=MsoNormal style='text-align:justify'><span lang=EN-IN
style='font-size:14.0pt;line-height:107%'>6. Don't operate the device if
ambient temperature is more than 45</span><span lang=EN-IN style='font-size:
14.0pt;line-height:107%'>°</span><span lang=EN-IN style='font-size:14.0pt;
line-height:107%'> C. </span></p>

</div>

</body>

</html>

`;

export const HelpDesk = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >

                    <View style={[styles.card, { height: 500 }]}>
                        <Text style={styles.heading2}>User Manual </Text>
                        <WebView style={{ height: 500, width: 350 }}  originWhitelist={['*']} nestedScrollEnabled={true} source={{ html: HTML }} />

                    </View>
                    <List.AccordionGroup>
                        {helpData ?
                            <View style={styles.card}>
                                <Text style={styles.heading2}>Acronyms</Text>
                                {helpData.map((mainItem) => {
                                    return (
                                        < List.Accordion
                                            title={mainItem.title}
                                            id={mainItem.id}
                                            key={mainItem.id}
                                            theme={theme}
                                            style={{ borderWidth: .3, borderColor: 'lightgray' }}
                                            left={props => <List.Icon {...props} icon={mainItem.icon} />}
                                        >
                                            {mainItem.submenu ?
                                                mainItem.submenu.map((subItem) => {
                                                    return (
                                                        <List.Item
                                                            key={subItem.id}
                                                            title={subItem.title}
                                                            style={{ backgroundColor: 'whitesmoke', elevation: 0 }}
                                                            left={props => <Avatar.Text  {...props} theme={theme} size={34} color='white' label={subItem.label} />}
                                                        />
                                                    );
                                                })
                                                : <></>
                                            }
                                        </List.Accordion>
                                    );
                                })}
                            </View>
                            : <></>
                        }
                    </List.AccordionGroup>
                </ScrollView>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,

    },
    card: {
        backgroundColor: 'white',
        padding: 15,
        paddingBottom: 20,
        borderRadius: 20,
        marginVertical: 10
    },
    heading2: {
        fontSize: 18,
        color: '#03045e',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20
    },
    pdf: {
        flex: 1,
        width: 200,
        height: 400,
    }
})
