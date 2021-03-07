import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'
import { Button, Icon } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';


export default class CreateExercise extends Component {
 
render() {
  
    return (
      <div><h1 style={{ color: 'navy',position: 'absolute', left: '32%' }}>Master Schedule Spring 2021</h1>
      <h2 style={{ color: 'navy', position: 'absolute', top: '20%', left: '28%', btm: '200%' }}>Priority Registration for Continuing Students:</h2>
      <h4 style={{ color: 'black', position: 'absolute', top: '50%', left: '5%', btm: '200%' }}>Review your academic record using Degree Works. Continuing students whose current academic standing is probation must seek academic advising. At or after your priority date, register on the WEB. Computers with internet access are available in the Library.  </h4>
       {
  
    <div handClickLogout={this.handClickLogout}>
    <Table striped bordered hover size="sm"style = {{width:"100vh",position: 'absolute', left: '50%', top: '39%',
    transform: 'translate(-50%, -50%)'}}>
    <thead>
      <tr>
        <th>Seniors</th>
        <th>Apr 5 2021</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Juniors</td>
        <td>Apr 8 2021 </td>
      
      </tr>
      <tr>
        <td>Sophomores</td>
        <td>Apr 12 2021</td>
      
      </tr>
      <tr>
        <td>Freshman</td>
        <td>Apr 15 2021</td>
      
      </tr>
     
    </tbody>
  </Table>
    
  <h2 style={{ color: 'navy', position: 'absolute', top: '60%', left: '43%', btm: '200%'}}>Class Periods:</h2>  
  
  <h6 style={{ color: 'black', position: 'absolute', top: '67%', left: '45%', btm: '200%'}}>
  <List bulleted>
    <List.Item>- 8:00AM - 9:30AM</List.Item>
    <List.Item>- 9:40AM - 11:10AM</List.Item>
    <List.Item>- 11:20AM - 12:50PM</List.Item>
        <List.Item>- 1:00PM - 2:30PM</List.Item>
        <List.Item>- 2:40PM - 4:10PM</List.Item>
    <List.Item>- 4:20PM - 5:50PM</List.Item>
    <List.Item>- 6:00PM - 7:30PM</List.Item>
    <List.Item>- 7:40PM - 9:10PM</List.Item>
  </List></h6>

  <h2 style={{ color: 'navy', position: 'absolute', top: '90%', left: '42%', btm: '200%'}}>Days of the Week:</h2>  
  <h6 style={{ color: 'black', position: 'absolute', top: '95%', left: '35%', btm: '200%'}}>The letters for the seven days of the week are: M, T, W, R, F, S, and U.</h6>
  <h2 style={{ color: 'navy', position: 'absolute', top: '100%', left: '43%', btm: '200%'}}>Course Codes:</h2>  
  
  <h6 style={{ color: 'black', position: 'absolute', top: '105%', left: '10%', btm: '200%'}}>The course coding system consists of a department letter indicator, a numerical indicator, and a section indicator as follows: Department indicators (consists of the initials that identify the department offering the course):</h6>
  <h6 style={{ color: 'black', position: 'absolute', top: '110%', left: '45%', btm: '200%'}}><List bulleted>
    <List.Item>- AS American Studies</List.Item>
    <List.Item>- BS Biological Sciences</List.Item>
    <List.Item>- BU School of Business</List.Item>
        <List.Item>- CL Community Learning </List.Item>
        <List.Item>- CP Chemistry and Physics </List.Item>
    <List.Item>- CR Criminology </List.Item>
    <List.Item>- CS Computer Science </List.Item>
    <List.Item>- ED School of Education </List.Item>
    <List.Item>- EL English SY Sociology</List.Item>
    <List.Item>- HI History and Philosophy </List.Item>
    <List.Item>- IR Industrial and Labor Relations</List.Item>
        <List.Item>- LI Liberal Studies</List.Item>
        <List.Item>- MA Mathematics</List.Item>
    <List.Item>- ML Modern Languages</List.Item>
    <List.Item>- PE Politics, Economics and Law</List.Item>
    <List.Item>- PH Public Health</List.Item>
    <List.Item>- PS Professional Studies</List.Item>
        <List.Item>- PY Psychology</List.Item>
    <List.Item>- VA Visual Arts</List.Item>
    <List.Item>- WS Women’s Studies</List.Item>
    
  </List></h6>   
  <h2 style={{ color: 'navy', position: 'absolute', top: '165%', left: '33%', btm: '200%'}}>College Policy on Academic Standing:</h2>  
  <h7 style={{ color: 'black', position: 'absolute', top: '175%', left: '2%', btm: '200%'}}>On the recommendation of the college faculty, the following policy on academic standing is in effect.  From the Spring 1992 semester onward, good academic standing will be determined by this policy.</h7>

  <h7 style={{ color: 'navy', position: 'absolute', top: '180%', left: '2%', btm: '200%'}}>* Academic Standing Policy</h7>

  <h7 style={{ color: 'black', position: 'absolute', top: '185%', left: '2%', btm: '200%'}}>All students are expected to maintain good academic standing at the College.  Academic standing is determined by the student’s semester and cumulative grade point averages (the student’s overall academic performance while attending the College at Alpha University).</h7>

  <h7 style={{ color: 'navy', position: 'absolute', top: '195%', left: '2%', btm: '200%'}}>* Minimum Grade-Point Average (GPA) Requirements</h7>

  <h7 style={{ color: 'black', position: 'absolute', top: '205%', left: '2%', btm: '200%'}}>Students must maintain minimum semester and cumulative grade point averages of at least 2.00 to remain in good academic standing.  Students who fail to obtain a minimum semester grade point average of 2.00 in any particular semester will be placed on academic probation, which is a warning that their good academic standing is in jeopardy. Students who are on probation twice in succession and have attempted at least 32 credits are subject to suspension or dismissal (described below) at the point at which their cumulative GPA Springs below 2.00.</h7>

  <h7 style={{ color: 'black', position: 'absolute', top: '220%', left: '2%', btm: '200%'}}>Probation: Minimum Semester GPA less than 2.00 or Minimum Cumulative GPA less than 2.00</h7>

  <h7 style={{ color: 'black', position: 'absolute', top: '230%', left: '2%', btm: '200%'}}>Criteria for Academic Probation, Suspension, Dismissal</h7>

  <h7 style={{ color: 'navy', position: 'absolute', top: '240%', left: '2%', btm: '200%'}}>* Academic Probation applies automatically to students who fail for the first time to meet minimum GPA requirements in a given semester.  The student is placed on probation for the subsequent semester.  The student must meet all semester and cumulative minimum GPA requirements in order to be taken off probation.  A student on probation is ineligible to participate on College committees or intercollegiate athletics.  Academic probation, including any accompanying constraints upon a student’s activities, is intended as a support measure designed to encourage students to focus on their studies in order that they satisfy academic standards.</h7>

  <h7 style={{ color: 'navy', position: 'absolute', top: '255%', left: '2%', btm: '200%'}}>* Academic Suspension applies only to students who have attempted a minimum of 32 credits.  Students are automatically suspended from the College if already on probation and they fail to meet the minimum semester and cumulative GPA requirements. The suspended student may not re-register until one semester has elapsed.  Financial Aid, however, is not guaranteed.</h7>

  <h7 style={{ color: 'navy', position: 'absolute', top: '265%', left: '2%', btm: '200%'}}>* Academic Dismissal applies automatically to those students who were previously suspended, have returned, and again fail to meet the minimum semester and cumulative GPA requirements.  These students may not apply for reentrance until two semesters have elapsed from the semester of their last registration at the College.</h7>

  <h7 style={{ color: 'black', position: 'absolute', top: '275%', left: '2%', btm: '200%'}}>It should be noted that individual degree programs may require a higher GPA for courses in the major (see section on each academic department included in the catalog).  Students are advised to consult with their advisers regarding specific department requirements.</h7> 
  <h2 style={{ color: 'navy', position: 'absolute', top: '285%', left: '45%', btm: '200%'}}>Master Class List:</h2>   
  <h6 style={{ color: 'black', position: 'absolute', top: '295%', left: '45%', btm: '200%'}}><List bulleted>
  <List.Item>-BU 3502Principles of Accounting I</List.Item>
<List.Item>-BU 3511Principles of Accounting II</List.Item>
<List.Item>-BU 4500 Intermediate Accounting I</List.Item>
<List.Item>-BU 4510   Intermediate Accounting II</List.Item>
<List.Item>-BU 4570 Federal Income Tax I</List.Item>
<List.Item>-BU 4590 Cost Accounting</List.Item>
<List.Item>-BU 5505 Essentials-Gov't&Non-ProfAcctg</List.Item>
<List.Item>-BU 5525 International Accounting</List.Item>
<List.Item>-BU 5540 Advanced Accounting</List.Item>
<List.Item>-BU 5550 Auditing</List.Item>
<List.Item>-BU 5520 Financial Accounting Research</List.Item>
<List.Item>-BU 3600  Principles of Business Law</List.Item>
<List.Item>-BU 3605 Intermediate Business Law</List.Item>
<List.Item>-BU 3610 Advanced Business Law</List.Item>
<List.Item>-BU 3800 Marketing Principles</List.Item>
<List.Item>-BU 4110 Organizational Behavior & Management</List.Item>
<List.Item>-BU 4762 Financial Management I</List.Item>
<List.Item>-BU 5115 Operations Management</List.Item>
<List.Item>-BU 5190 Business Strategy & Policy</List.Item>
<List.Item>-MA 2000 Applied Statistics</List.Item>
<List.Item>-BU 3010 Information Systems for Managers or Information Technology and Applications</List.Item>
<List.Item>-BU 3905 Business Communications</List.Item>
<List.Item>-MA 2300 Calculus for Business & Economics</List.Item>
<List.Item>-PE 2420 Principles of Microeconomics</List.Item>
<List.Item>-PE 2430 Principles of Macroeconomics</List.Item>
<List.Item>-ED 6000 Foundations of Education</List.Item>
<List.Item>-ED 6001 Human Growth&Dvlpmnt MAT</List.Item>
<List.Item>-ED 6002 Foundations of Literacy MAT</List.Item>
<List.Item>-ED 6003 The Exceptional Learner MAT</List.Item>
<List.Item>-ED 6900 Student Teaching: Science</List.Item>
<List.Item>-CP 6560 Topics:Molecular Bio & BioChem</List.Item>
<List.Item>-BS 6590 Topics: Environmental Science</List.Item>
<List.Item>-BS 6630  Developmental Biology/MAT</List.Item>
<List.Item>-ED 6092 Literacy</List.Item>
<List.Item>-ED 6250 Teachng Ntr&Dvlmnt Science MAT</List.Item>
<List.Item>-CP 6590 Topics: Environmental Science</List.Item>
<List.Item>-CP 6740 Topics in Earth&Space Science</List.Item>
<List.Item>-CP 6500 Science and the Community</List.Item>
<List.Item>-ED 6084 Method/Mtrls Teaching Math MAT</List.Item>
<List.Item>-ED 6094 Literacy</List.Item>
<List.Item>-ED 6902 Student Teaching Mathematics</List.Item>
<List.Item>-MA 6100 Probability and Statistics</List.Item>
<List.Item>-MA 6200 Algebra</List.Item>
<List.Item>-MA 6150 Geometry</List.Item>
<List.Item>-MA 6250 Analysis</List.Item>
<List.Item>-MA 6400 Topics in Advanced Math & Tech</List.Item>
<List.Item>-MA 7500 Topics in Math & Math Ed</List.Item>
<List.Item>-ED 6085 Mthd/Mtrls Teach Socl Stds MAT</List.Item>
<List.Item>-ED 6095 Literacy</List.Item>
<List.Item>-ED 6903 Student Teaching:Social Stds</List.Item>
<List.Item>-HI 6510 Topics in US History</List.Item>
<List.Item>-HI 6520 US Constitutional&Polticl Hist</List.Item>
<List.Item>-HI 6530 Econ:Theories</List.Item>
<List.Item>-HI 6540 Topics in European History</List.Item>
<List.Item>-HI 6565 Topics in the History of India</List.Item>
<List.Item>-HI 7500 Questioning Global History</List.Item>
<List.Item>-CP 2120 Principles of Chemistry I</List.Item>
<List.Item>-CP 2121 Principles of Chemistry Lab I</List.Item>
<List.Item>-CP 2130 Principles of Chemistry II</List.Item>
<List.Item>-CP 2131 Principles Chemistry Lab II</List.Item>
<List.Item>-CP 3300 Organic Chemistry I</List.Item>
<List.Item>-CP 3302 Organic Chemistry Lab I</List.Item>
<List.Item>-CP 3310 Organic Chemistry II</List.Item>
<List.Item>-CP 3312 Organic Chemistry Lab II</List.Item>
<List.Item>-CP 3400 Analytical Chemistry-Lect/Lab</List.Item>
<List.Item>-CP 4700 Physical Chemistry I</List.Item>
<List.Item>-CP 5920 Seminar I</List.Item>
<List.Item>-CP 5921 Seminar II</List.Item>
<List.Item>-CP 4510 Biochemistry I</List.Item>
<List.Item>-CP 4515 Biochemistry II</List.Item>
<List.Item>-CP 4520 Biochemistry Lab</List.Item>
<List.Item>-BS 2400 Basic Bio Sciences I</List.Item>
<List.Item>-BS 2410 Basic Bio Sciences II</List.Item>
<List.Item>-BS 4400 Cell Biology</List.Item>
<List.Item>-BS 4460 Genetics</List.Item>
<List.Item>-BS 4560 Molecular Biology</List.Item>
<List.Item>-CP 2220 Structure of Physics I</List.Item>
<List.Item>-CP 2221 Structure of Physics I Lab</List.Item>
<List.Item>-CP 2230 Structure of Physics II</List.Item>
<List.Item>-MA 2310 Calc & Analytic Geometry I</List.Item>
<List.Item>-MA 2320 Calc & Analytic Geometry II</List.Item>
<List.Item>-BS4400 Cell Biology</List.Item>
<List.Item>-BS4460 Genetics</List.Item>
<List.Item>-BS4440 Evolution</List.Item>
<List.Item>-BS2490 Environmental Science</List.Item>
<List.Item>-BS3400 Vertebrate Physiology</List.Item>
<List.Item>-BS3450 Plant Biology</List.Item>
<List.Item>-BS3510 Parasitology</List.Item>
<List.Item>-BS3520 Comparative Anatomy</List.Item>
<List.Item>-BS3530 Comparative Genomics</List.Item>
<List.Item>-BS3531 Comparative Genomics Lab</List.Item>
<List.Item>-BS3710 Environmental Physiology</List.Item>
<List.Item>-BS3810  Biological Aspects of Aging</List.Item>
<List.Item>-BS4400  Cell Biology</List.Item>
<List.Item>-BS4410  Histology</List.Item>
<List.Item>-BS4420  Microbiology</List.Item>
<List.Item>-BS4430  Developmental Biology</List.Item>
<List.Item>-BS4440  Evolution</List.Item>
<List.Item>-BS4460  Genetics</List.Item>
<List.Item>-BS4461  Immunology</List.Item>
<List.Item>-BS4470  Ecology</List.Item>
<List.Item>-BU 3010 Information Systems for Managers</List.Item>
<List.Item>-BU 3502 Principles of Accounting I</List.Item>
<List.Item>-BU 4110 Organizational Behavior & Mgmt</List.Item>
<List.Item>-MA 2300 Calc/Business & Economics</List.Item>
<List.Item>-BU 4120  Global Business</List.Item>
<List.Item>-BU 5171 Human Resource Management</List.Item>
<List.Item>-BU 5196 Leadership</List.Item>
<List.Item>-BU 4035 Web Sys & Electronic Commerce</List.Item>
<List.Item>-BU 4130 Entrepreneurship</List.Item>
<List.Item>-BU 5195 Management Seminar</List.Item>
<List.Item>-CP 2121Principles of Chemistry Lab I</List.Item>
<List.Item>-CP 2130  Principles of Chemistry II</List.Item>
<List.Item>-CP 3302  Organic Chemistry Lab I</List.Item>
<List.Item>-CP 4700  Physical Chemistry I</List.Item>
<List.Item>-CP 4710 Physical Chemistry II</List.Item>
<List.Item>-CP 4720  Physical Chemistry Lab</List.Item>
<List.Item>-CP 4800 Adv Chemical Methods: Lect/Lab</List.Item>
<List.Item>-CP 2240  General Physics I</List.Item>
<List.Item>-CP 2250 General Physics II</List.Item>
<List.Item>-CP 2251 General Physics II Lab</List.Item>
<List.Item>-CP 3230  Math Methods: Physical Science</List.Item>
<List.Item>-MA 3160  Linear Algebra</List.Item>
<List.Item>-MA 3330  Calc & Analyt Geometry III</List.Item>
<List.Item>-MA 4360  Differential Equations</List.Item>
<List.Item>-ED3700 Child Development for Teachers</List.Item>
<List.Item>-ED3820 Foundations of Special Education</List.Item>
<List.Item>-ED3950 Creating Schools for a Just Society</List.Item>
<List.Item>-ED4050 Innovative Instructional Design and Assessment</List.Item>
<List.Item>-ED4121 Methods & Materials of Teaching Elementary Science Methods</List.Item>
<List.Item>-ED4122 Methods & Materials of Teaching Elementary Math Methods</List.Item>
<List.Item>-ED4200 Literacy for All Students</List.Item>
<List.Item>-ED4220 Language Arts in the Context of Childhood Education</List.Item>
<List.Item>-ED5925 Building a Classroom Community for All Learners</List.Item>
<List.Item>-CS 2510 Computer Programming I</List.Item>
<List.Item>-CS 2511 Computer Programming II</List.Item>
<List.Item>-CS 3620 Computer Architecture I</List.Item>
<List.Item>-CS 3810  Data Structures & Algorithms</List.Item>
<List.Item>-CS 3911 C++in Object Oriented Design</List.Item>
<List.Item>-CS 4100 Technical Communications</List.Item>
<List.Item>-CS 4501 Software Engineering</List.Item>
<List.Item>-CS 4550 Database Management Systems</List.Item>
<List.Item>-CS 4720 Internet & Web Tech</List.Item>
<List.Item>-CS 5910 Systems Design & Implement</List.Item>
<List.Item>-CS 5710 Computer Networks</List.Item>
<List.Item>-CS 4400  Artificial Intelligence</List.Item>
<List.Item>-CS 4705 Intro to Computer Security</List.Item>
<List.Item>-CS 5610  Operating Systems</List.Item>
<List.Item>-CS 5730  Computer Network Security</List.Item>
<List.Item>-CS 5810  Data Mining</List.Item>
<List.Item>-MA 3030  Discrete Mathematics</List.Item>
<List.Item>-MA 3210  Intro to Prob & Statistics</List.Item>
<List.Item>-MA 4100  Number Theory</List.Item>
<List.Item>-SY 1500  Intro Sociology</List.Item>
<List.Item>-CR 1500 Intro to Criminology</List.Item>
<List.Item>-CR 2090  Juvenile Delinquency</List.Item>
<List.Item>-CR 3092 Victimology</List.Item>
<List.Item>-CR 3093  Criminal Justice Admin</List.Item>
<List.Item>-CR 3094 Drugs and Society</List.Item>
<List.Item>-CR 3117  Policing Bodies</List.Item>
<List.Item>-CR 3200  Crime</List.Item>
<List.Item>-CR 4000 Gender</List.Item>
<List.Item>-CR 4091 Punishment & Corrections</List.Item>
<List.Item>-CR 4099 Sociology of Violence</List.Item>
<List.Item>-CR 4999 Issues in Criminology</List.Item>
<List.Item>-SY 2600  Social Deviance</List.Item>
<List.Item>-SY 4810 Law & Justice</List.Item>
<List.Item>-SY 4520 Research Methods I</List.Item>
<List.Item>-SY 4530 Sociological Theory I</List.Item>
<List.Item>-SY 4570 Research Methods II</List.Item>
<List.Item>-CR 4550 Theories of Crime</List.Item>
<List.Item>-SY 5990  Senior Seminar</List.Item>
<List.Item>-EL 1000 English Comp I: Exposition</List.Item>
<List.Item>-EL 2239 Horror Literature</List.Item>
<List.Item>-EL 3010  Structure & Grammar of English</List.Item>
<List.Item>-EL 3500  Lit Across Cultures I:Analysis</List.Item>
<List.Item>-EL 3510  Lit Across Cultures II:Theory</List.Item>
<List.Item>-EL 4400  Critical Theory</List.Item>
<List.Item>-EL 3600 US Literature I</List.Item>
<List.Item>-EL 3610  US Literature II</List.Item>
<List.Item>-EL 3800 Eng Lit I:Beowulf-18th Century</List.Item>
<List.Item>-EL 3810  Eng Lit II:Romantics - Present</List.Item>
<List.Item>-EL 3560  Literatures of Europe:Part I</List.Item>
<List.Item>-EL 3561 Literatures of Europe:Part II</List.Item>
<List.Item>-EL 3950  Creative Non-Fiction</List.Item>
<List.Item>-EL 4311 Greek Drama</List.Item>
<List.Item>-EL 4312 Greek Mythology</List.Item>
<List.Item>-EL 4325 Shakespeare: Selected Plays</List.Item>
<List.Item>-EL 4402 Sin & Sexuality in Literature</List.Item>
<List.Item>-EL 4500 Topics in British/US Lit</List.Item>
<List.Item>-EL 4510  Modern Drama & Theatre</List.Item>
<List.Item>-EL 4540  Epic: East and West</List.Item>
<List.Item>-EL 4800  Major Authors</List.Item>
<List.Item>-EL 3811  Survey of African-American Lit</List.Item>
<List.Item>-EL 4000 Native American Literature</List.Item>
<List.Item>-EL 4010 Harlem Renaissance</List.Item>
<List.Item>-BU 3010 Info Systems For Mgrs</List.Item>
<List.Item>-BU 3511 Principles of Accounting II</List.Item>
<List.Item>-BU 5115  Operations Management</List.Item>
<List.Item>-BU 5190  Business Strategy & Policy</List.Item>
<List.Item>-BU 5771 Global Financial Markets</List.Item>
<List.Item>-BU 4720   Global Financial Markets</List.Item>
<List.Item>-BU 4774   Financial Markets & Inst</List.Item>
<List.Item>-BU 5740  Invest Mgmt & Securities Anal</List.Item>
<List.Item>-BU 5710   Fin. Modeling & Forecasting</List.Item>
<List.Item>-BU 5760  Corporate Finance</List.Item>
<List.Item>-BU 5789 Futures & Options Markets</List.Item>
<List.Item>-BS 2100 Biology for Non-Science Majors</List.Item>
<List.Item>-BS 2300  Anatomy&Physiology I Lecture</List.Item>
<List.Item>-BS 2310  Anatomy&Physiology II Lecture</List.Item>
<List.Item>-BS 2410  Basic Bio Sciences II</List.Item>
<List.Item>-PH 3600  Social Determinants of Health</List.Item>
<List.Item>-PH 3610 Intro.-U.S.Health Care System</List.Item>
<List.Item>-PH 4670 Biostatistics</List.Item>
<List.Item>-PH 4800 Epidemiology</List.Item>
<List.Item>-PH 4900 Community Health Field Placmt</List.Item>
<List.Item>-PH 5900 Research Methods</List.Item>
<List.Item>-PH 4450 Human Sexuality</List.Item>
<List.Item>-PH 3200  Nutrition & Society</List.Item>
<List.Item>-PH 3700  Medical Anthropology</List.Item>
<List.Item>-PH 4600  Health Program Planning & Eval</List.Item>
<List.Item>-PH 4610 Women's Health</List.Item>
<List.Item>-PH 4631  Mental Health</List.Item>
<List.Item>-PH 4661  Health Education</List.Item>
<List.Item>-PH 4680 Environmental Health</List.Item>
<List.Item>-PH 4750  Aging & Social Policy</List.Item>
<List.Item>-PH 4760  Health Administration</List.Item>
<List.Item>-PH 4770  Occupational Health</List.Item>
<List.Item>-PH 4790 Health Care Policy</List.Item>
<List.Item>-PH 4810  Ethics in Public Health</List.Item>
<List.Item>-PH 4820  Health Law</List.Item>
<List.Item>-PH 4890  Environmental Justice</List.Item>
<List.Item>-HI 2681 Intro to Europe Hist:1350-Present</List.Item>
<List.Item>-AS 2112 American People I</List.Item>
<List.Item>-AS 2122 American People II</List.Item>
<List.Item>-HI 3080   Asian Cultures</List.Item>
<List.Item>-HI 3091 African Cultures</List.Item>
<List.Item>-HI 3110 Latin American Culture</List.Item>
<List.Item>-HI 3640  African History</List.Item>
<List.Item>-HI 3835 Islamic Cultures</List.Item>
<List.Item>-HI 4308 History Modern Middle East</List.Item>
<List.Item>-HI 4632 4 Credits Japanese History Through Literature</List.Item>
<List.Item>-HI 4800  History of India</List.Item>
<List.Item>-HI 4900 Modern China-Study Abroad</List.Item>
<List.Item>-HI 4905 Chinese Civilization</List.Item>
<List.Item>-PE 4690 Politics of Lat Amer/Caribbean</List.Item>
<List.Item>-HI 4001 19th Century</List.Item>
<List.Item>-HI 4011  20th Century</List.Item>
<List.Item>-HI 4700  Modern Global Environments</List.Item>
<List.Item>-HI 3610  America's African Heritage</List.Item>
<List.Item>-HI 3840 Crescent and Cross</List.Item>
<List.Item>-HI 4650   History of African Enslavement</List.Item>
<List.Item>-HI 4910  Chinese Diaspora</List.Item>
<List.Item>-HI 2810  Geography</List.Item>
<List.Item>-Earth and People</List.Item>
<List.Item>-HI 4600 World Regional Geography</List.Item>
<List.Item>-AS 4212  Early America</List.Item>
<List.Item>-AS 4218  Civil War & Reconstruction</List.Item>
<List.Item>-AS 4290  Youth in America: A History</List.Item>
<List.Item>-PE 2650 Intro to U.S. Politics</List.Item>
<List.Item>-IR 2210 Unions & Management: An Intro</List.Item>
<List.Item>-IR 3140 Unions & Public Policy</List.Item>
<List.Item>-IR 3300 CollectiveBarg & GrievanceProc</List.Item>
<List.Item>-IR 4320 Labor & Employment Law</List.Item>
<List.Item>-IR 3330 Women</List.Item>
<List.Item>-IR 3415 Labor Economics</List.Item>
<List.Item>-IR 3860 Development of the Modern Corp</List.Item>
<List.Item>-BU 5125  Business Ethics</List.Item>
<List.Item>-BU 5171  Human Resource Managemen</List.Item>
<List.Item>-HS 4770  Occupational Health</List.Item>
<List.Item>-IR 3120  History:AmericanLaborRelations</List.Item>
<List.Item>-IR 3260  Comparative Labor Relations</List.Item>
<List.Item>-IR 3500 Arbitration & Mediation</List.Item>
<List.Item>-IR 4200  Strategic Research/Organizers</List.Item>
<List.Item>-IR 4600 Topics in Labor Studies</List.Item>
<List.Item>-PE 4430  Health Economics</List.Item>
<List.Item>-PE 2300 Introduction to Law</List.Item>
<List.Item>-EL 8998 Elec(Interpersonal Comm)</List.Item>
<List.Item>-MA 1020 College Algebra</List.Item>
<List.Item>-CS 3611 Advanced C#</List.Item>
<List.Item>-BU 3800 Marketing: Principles&Concepts</List.Item>
<List.Item>-BU3010 Information Systems for Managers</List.Item>
<List.Item>-MA2000 Applied Statistics</List.Item>
<List.Item>-MA2300 Calculus for Business & Economics</List.Item>
<List.Item>-BU3600 Principles Business Law</List.Item>
<List.Item>-BU3800 Marketing: Principles & Concepts</List.Item>
<List.Item>-BU3905 Business Communication</List.Item>
<List.Item>-BU4110 Organizational Behavior & Management</List.Item>
<List.Item>-BU4762 Financial Management</List.Item>
<List.Item>-BU5115 Operations Management</List.Item>
<List.Item>-BU5190 Business Strategy & Policy</List.Item>
<List.Item>-BU4800 Marketing Research</List.Item>
<List.Item>-BU4820 International Marketing</List.Item>
<List.Item>-BU4851 Consumer Behavior</List.Item>
<List.Item>-BU5841 Strategic Marketing</List.Item>
<List.Item>-BU5880 Brand Theory & Strategy</List.Item>
<List.Item>-MA2310 Calculus and Analytic Geometry I</List.Item>
<List.Item>-MA2320 Calculus and Analytic Geometry II</List.Item>
<List.Item>-MA3030 Discrete Mathematics</List.Item>
<List.Item>-MA3160 Linear Algebra</List.Item>
<List.Item>-MA3210 Intro. To Probability & Statistics</List.Item>
<List.Item>-MA3330 Calculus and Analytic Geometry III</List.Item>
<List.Item>-MA3520 Transition to Advanced Mathematics</List.Item>
<List.Item>-MA4360 Differential Equations</List.Item>
<List.Item>-MA5120 Abstract Algebra I</List.Item>
<List.Item>-MA5320 Advanced Calculus I</List.Item>
<List.Item>-CS2510 Computer Programming I</List.Item>
<List.Item>-MA4100 Number Theory</List.Item>
<List.Item>-MA4200 Probability</List.Item>
<List.Item>-MA4510 Geometry</List.Item>
<List.Item>-MA4910 Operations Research I</List.Item>
<List.Item>-MA4920 Operations Research II</List.Item>
<List.Item>-MA5230 Mathematical Statistics</List.Item>
<List.Item>-MA5380 Complex Analysis</List.Item>
<List.Item>-MA5510 Topology</List.Item>
<List.Item>-CS2511 Computer Programming II</List.Item>
<List.Item>-CS3810 Data Structures & Algorithms</List.Item>
<List.Item>-AS2020 New Media CE</List.Item>
<List.Item>-AS2652 Media Studies</List.Item>
<List.Item>-AS2700 The Engaged Eye</List.Item>
<List.Item>-AS3310 From Citizen to Consumer</List.Item>
<List.Item>-AS3632 History of U.S. Film</List.Item>
<List.Item>-AS3712 American Film Genres</List.Item>
<List.Item>-AS3722 History of Mass Media</List.Item>
<List.Item>-AS3732 Politics of Media</List.Item>
<List.Item>-AS3735 Documentary Media Studies</List.Item>
<List.Item>-AS3742 Myths and Images in Film</List.Item>
<List.Item>-AS3745 Feminine and Masculine in Film</List.Item>
<List.Item>-AS3810 Music and Media</List.Item>
<List.Item>-AS3830 Public Relations and Society</List.Item>
<List.Item>-AS3842 African-Americans and the Mass Media</List.Item>
<List.Item>-AS3852 Women and the Media</List.Item>
<List.Item>-AS4160 Special Topics in Media Studies</List.Item>
<List.Item>-AS4280 Global Media</List.Item>
<List.Item>-AS4722 Film: Ideas and Aesthetics</List.Item>
<List.Item>-AS4725 The Photograph and American Culture</List.Item>
<List.Item>-AS4732 Political Film</List.Item>
<List.Item>-AS4850 Digital Revolution</List.Item>
<List.Item>-SY4651 Sociology of Communications and Media</List.Item>
<List.Item>-HI1010 World Religions: West</List.Item>
<List.Item>-HI1020 World Religions: East</List.Item>
<List.Item>-HI2720 Introduction to Philosophy</List.Item>
<List.Item>-HI2155 Introduction to Comparative Religion</List.Item>
<List.Item>-HI2700 Introduction to Logic</List.Item>
<List.Item>-HI3011 Foundations of Judeo-Christian Tradition</List.Item>
<List.Item>-HI3080 Asian Cultures</List.Item>
<List.Item>-HI3091 African Cultures</List.Item>
<List.Item>-HI3835 Islamic Cultures</List.Item>
<List.Item>-HI3840 Crescent and Cross</List.Item>
<List.Item>-HI4905 Chinese Civilization</List.Item>
<List.Item>-HI3323 Buddhism</List.Item>
<List.Item>-HI3525 Ancient Greek Philosophy</List.Item>
<List.Item>-HI3703 Modern Philosophy</List.Item>
<List.Item>-HI3704 African Religions and Philosophy</List.Item>
<List.Item>-HI3710 Contemporary Philosophical Issues</List.Item>
<List.Item>-HI3950 Philosophy of Religion</List.Item>
<List.Item>-HI4051 Logic and Scientific Reasoning</List.Item>
<List.Item>-HI4318 Islamic Philosophy and Mysticism</List.Item>
<List.Item>-HI4395 20th & 21st Century Philosophy</List.Item>
<List.Item>-PE4620 Political Thought</List.Item>
<List.Item>-PE4665 Human Rights</List.Item>
<List.Item>-PE4658 Law and Civil Liberties</List.Item>
<List.Item>-PE4659 Law and Civil Rights</List.Item>
<List.Item>-HI3040 Analysis of Cultures</List.Item>
<List.Item>-PE2300 Introduction to Law</List.Item>
<List.Item>-PE2650 Introduction to U.S. Politics</List.Item>
<List.Item>-IR2210 Unions and Management: An Introduction</List.Item>
<List.Item>-PE2220 Introduction to Urban Issues</List.Item>
<List.Item>-PE2400 Introduction to Political Economy</List.Item>
<List.Item>-PE3100 International Relations</List.Item>
<List.Item>-PE4320 Jurisprudence: Legal Thought</List.Item>
<List.Item>-PE4470 History of Economic Thought</List.Item>
<List.Item>-PE4620 Political and Social Thought</List.Item>
<List.Item>-PE4580 Origins of the Capitalist Economy</List.Item>
<List.Item>-PE4590 Global Economy in the 20th Century</List.Item>
<List.Item>-PY2010 Introduction to Psychology</List.Item>
<List.Item>-PY3110 Research Methods I: (Orientation)</List.Item>
<List.Item>-PY3120 Research Methods II: (Statistics)</List.Item>
<List.Item>-PY4100 Research Methods III (Advanced Research Skills)</List.Item>
<List.Item>-PY4130 Field Experience and Research</List.Item>
<List.Item>-PY3410 Cognitive Psychology</List.Item>
<List.Item>-PY3420 Learning & Motivation</List.Item>
<List.Item>-PY3610 Brain & Behavior</List.Item>
<List.Item>-PY3620 Drugs & Behavior</List.Item>
<List.Item>-PY3215 Foundations of Child Development</List.Item>
<List.Item>-PY3310 Abnormal Human Behavior</List.Item>
<List.Item>-PY3311 Theories of Personality</List.Item>
<List.Item>-PY3510 Social Psychology</List.Item>
<List.Item>-PY2340 Community Psychology</List.Item>
<List.Item>-PY2530 Psychology of Prejudice</List.Item>
<List.Item>-PY2720 Psychology of Gender</List.Item>
<List.Item>-PY3710 Psychology & Social Justice</List.Item>
<List.Item>-ML2100 Intermediate Spanish Conversation I</List.Item>
<List.Item>-ML2110 Intermediate Spanish Conversation II OR ML2500 Spanish Language and Culture</List.Item>
<List.Item>-ML3100 Advanced Spanish Conversation and Composition</List.Item>
<List.Item>-ML3362 Advanced Spanish Grammar and Composition</List.Item>
<List.Item>-ML3200 Translation Workshop</List.Item>
<List.Item>-ML3250 Spanish Linguistics</List.Item>
<List.Item>-ML3260 Spanish Linguistics: Universals of Grammar</List.Item>
<List.Item>-ML3500 Critical Writing and Textual Analysis</List.Item>
<List.Item>-ML4100 The Spanish Golden Age</List.Item>
<List.Item>-ML4500 Culture and Literature of Spain from the Middle Ages to the 18th century</List.Item>
<List.Item>-ML4510 Civilization and Culture of Spain</List.Item>
<List.Item>-ML3300 Artistic Expressions of Spain</List.Item>
<List.Item>-ML3310 Topics in Hispanic Cultural Studies</List.Item>
<List.Item>-ML3410 Latino/a Writers in the US</List.Item>
<List.Item>-ML3650 Latin American Cinema</List.Item>
<List.Item>-ML3880 Masterpieces of Hispanic Literature</List.Item>
<List.Item>-ML4325 Contemporary Theatre of the Hispanic World</List.Item>
<List.Item>-ML4350 Recurrent Themes in Latin American Painting and Literature</List.Item>
<List.Item>-ML4450 Hispanic Women Writers</List.Item>
<List.Item>-ML4515 Recent Narrative from Spain</List.Item>
<List.Item>-ML4520 Culture and Literature of the Spanish Caribbean</List.Item>
<List.Item>-ML/EL4630 Latin American Literature</List.Item>
<List.Item>-ML4700 Studies in Spanish Literature of the Nineteenth and Twentieth Centuries</List.Item>
<List.Item>-ML4725 The Novel and the City</List.Item>
<List.Item>-ML4750 Fiction into Film: the Spanish and Latin American Cinema</List.Item>
<List.Item>-ML5400 Contemporary Literary Theory and its Applications</List.Item>
<List.Item>-ED3700 Child Development</List.Item>
<List.Item>-ED4121 Methods and Materials for Teaching Elementary Science Majors</List.Item>
<List.Item>-ED4122 Methods and Materials for Teaching Elementary Math Methods</List.Item>
<List.Item>-ED4850 Instructional Design & Delivery for Students with Disabilities</List.Item>
<List.Item>-ED4300 Assessment and Evidence-based Decision Making in Special Education</List.Item>
<List.Item>-ED4810 Positive Behavior Supports and Interventions for Students with Disabilities</List.Item>
<List.Item>-ED4890 Effective Practices for Students with Low Incidence Disabilities</List.Item>
<List.Item>-ED5930 Internship: Meeting the Needs of Diverse Learners</List.Item>
<List.Item>-ED5960 Student Teaching and Seminar</List.Item>
<List.Item>-SY2400 Sociology Through the Arts</List.Item>
<List.Item>-SY2550 Social Problems</List.Item>
<List.Item>-SY2600 Social Deviance</List.Item>
<List.Item>-SY2800 Race</List.Item>
<List.Item>-SY3160 Sociology of Culture</List.Item>
<List.Item>-SY3280 Social Inequality</List.Item>
<List.Item>-SY3630 Political Sociology</List.Item>
<List.Item>-SY3700 Family and Society</List.Item>
<List.Item>-SY3750 Medical Sociology</List.Item>
<List.Item>-SY3800 Race and Ethnicity</List.Item>
<List.Item>-SY3900 Social Movements</List.Item>
<List.Item>-SY3910 Sociology of Work</List.Item>
<List.Item>-SY4260 Social Work: Theory and Practice</List.Item>
<List.Item>-SY4270 Internship in Social Work</List.Item>
<List.Item>-Sociology and Criminology</List.Item>
<List.Item>-SY4400 Social Psychology</List.Item>
<List.Item>-SY4500 Global Sociology</List.Item>
<List.Item>-SY4600 Social Programs</List.Item>
<List.Item>-SY4810 Law and Justice</List.Item>
<List.Item>-SY4830 Gender and Society</List.Item>
<List.Item>-SY4850 Urban and Suburban Sociology</List.Item>
<List.Item>-SY4950 Sociology of Music</List.Item>
<List.Item>-SY4999 Issues in Sociology</List.Item>
<List.Item>-CR2090 Juvenile Delinquency</List.Item>
<List.Item>-CR3092 Victimology</List.Item>
<List.Item>-CR3093 Criminal Justice Administration</List.Item>
<List.Item>-CR3094 Drugs and Society</List.Item>
<List.Item>-VA2010 Intro. to Creative Thinking</List.Item>
<List.Item>-VA2020 Basic Design</List.Item>
<List.Item>-VA2030 Drawing</List.Item>
<List.Item>-VA2045 Introduction to Color</List.Item>
<List.Item>-VA2500 Art History I: 19th Century Art</List.Item>
<List.Item>-VA3100 Visual Culture</List.Item>
<List.Item>-VA3200 Art Tutorials I</List.Item>
<List.Item>-VA3400 Digital Imaging</List.Item>
<List.Item>-VA4200 Art Tutorials II</List.Item>
<List.Item>-VA5200 Art Tutorials III</List.Item>
<List.Item>-VA4900 Internship</List.Item>
<List.Item>-VA2320 Graphic Design I</List.Item>
<List.Item>-VA3380 Digital Video 4</List.Item>
<List.Item>-VA4260 Interactive Web Design</List.Item>
<List.Item>-VA4320 Graphic Design II</List.Item>
<List.Item>-VA4460 Digital Animation</List.Item>
<List.Item>-VA4265 3D Digital Desig</List.Item>
<List.Item>-VA4360 Advanced Electronic and Animation</List.Item>

    
  </List></h6> 
  
     
      </div>
    
}</div> 
    
      
    )
  }
}