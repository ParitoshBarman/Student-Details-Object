function CreateStudent(name, roll_no, classs, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.classs = classs;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;
  
  
    this.printReportCard = function(){
      
      console.log("+--------------------+");
      console.log("|     REPORT CARD    |");
      console.log("+--------------------+");
      console.log(`| Name     - ${this.name}    |`);
      console.log(`| Roll no. - ${this.roll_no}       |`);
      console.log(`| Class    - ${this.classs}       |`);
      console.log(`| Section  - ${this.section}       |`);
      console.log(`| Science  - ${this.marks_of_5_subjects.science}      |`);
      console.log(`| S.Sc     - ${this.marks_of_5_subjects.social_science}      |`);
      console.log(`| Maths    - ${this.marks_of_5_subjects.maths}      |`);
      console.log(`| English  - ${this.marks_of_5_subjects.english}      |`);
      console.log(`| Hindi    - ${this.marks_of_5_subjects.hindi}      |`);
      console.log(`| Prectage - ${((this.marks_of_5_subjects.science+this.marks_of_5_subjects.social_science+this.marks_of_5_subjects.maths+this.marks_of_5_subjects.english+this.marks_of_5_subjects.hindi)/500)*100} %    |`);
      console.log("+--------------------+");
    }
    
  }
  
  function Marks_of_5_subjects(science, maths, social_science, english, hindi) {
    this.science = science;
    this.maths = maths;
    this.social_science = social_science;
    this.english = english;
    this.hindi = hindi;
  }
  
  s1 = new CreateStudent("Aman", 1, "X", "A", new Marks_of_5_subjects(90, 80, 70, 60, 50));
  s2 = new CreateStudent("Amit", 2, "X", "A", new Marks_of_5_subjects(80, 70, 60, 50, 40));
  s3 = new CreateStudent("Ajay", 3, "X", "A", new Marks_of_5_subjects(70, 60, 50, 40, 30));
  s4 = new CreateStudent("Ashi", 4, "X", "A", new Marks_of_5_subjects(60, 50, 40, 30, 20));
  
  // console.log(s1);
  // console.log(s2);
  // console.log(s3);
  // console.log(s4);
  
  
  console.log(s1.printReportCard());
  console.log(s2.printReportCard());
  console.log(s3.printReportCard());
  console.log(s4.printReportCard());