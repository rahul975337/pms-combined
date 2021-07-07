drop schema pms;
create database pms;
use pms;
CREATE TABLE studentdetails (
  stid int NOT NULL AUTO_INCREMENT,
  sname varchar(30) NOT NULL ,
  usn varchar(12) NOT NULL UNIQUE,
  mobile bigint NOT NULL UNIQUE,
  email varchar(30) NOT NULL UNIQUE ,
  dob date NOT NULL,
  branch varchar(10) NOT NULL,
  cgpa float NOT NULL,
  PRIMARY KEY (stid,usn)
);



CREATE TABLE slogin (
  id int NOT NULL AUTO_INCREMENT,
  usn varchar(12) NOT NULL UNIQUE,
  pass varchar(50) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (usn) REFERENCES studentdetails(usn) ON DELETE CASCADE
);



CREATE TABLE admindetails (
  aid int NOT NULL AUTO_INCREMENT,
  aname varchar(30)  NOT NULL,
  email varchar(30) NOT NULL UNIQUE,
  phone bigint NOT NULL UNIQUE,
  depname varchar(10) NOT NULL,
  PRIMARY KEY (aid)
);


CREATE TABLE alogin (
  id int NOT NULL AUTO_INCREMENT,
  aname varchar(30)  NOT NULL,
  email varchar(30) NOT NULL,
  pass varchar(50) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (email) REFERENCES admindetails(email) ON DELETE CASCADE
);



CREATE TABLE companydetails (
  id int NOT NULL AUTO_INCREMENT,
  cname varchar(30) NOT NULL UNIQUE,
  cdescription  varchar(300) NOT NULL,
  email varchar(30) NOT NULL UNIQUE,
  phone bigint NOT NULL UNIQUE,
  website varchar(30) NOT NULL,
  adrs varchar(300) NOT NULL,
  package varchar(30) NOT NULL,
  mincgpa float NOT NULL,
  position varchar(50) NOT NULL,
  PRIMARY KEY (id,cname)
);



CREATE TABLE updateddrive (
  id int NOT NULL AUTO_INCREMENT,
  usn varchar(12) NOT NULL,
  sname varchar(30) NOT NULL UNIQUE,
  batch varchar(10) NOT NULL,
  cname varchar(30) NOT NULL,
  pdate date NOT NULL,
  package varchar(30) NOT NULL,
  position varchar(50) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (usn) REFERENCES studentdetails(usn) ON DELETE CASCADE,
  FOREIGN KEY (cname) REFERENCES companydetails(cname) ON DELETE CASCADE
);

INSERT INTO studentdetails (sname, usn, mobile, email, dob, branch, cgpa) VALUES
( 'Aarushi Rathore', '1js18is005', 9149256646, 'aarushirathore5@gmai', '1998-11-18', 'ISE', 9.1),
( 'Aditi J', '1js18is002', 9165487956, 'J.aditi@gmail.com', '1999-05-18', 'ISE', 8.6),
( 'Akanksha', '1js18is003', 8756245891, 'anku637@gmail.com', '1998-09-06', 'ISE', 8.8),
( 'Aman Sharma', '1js18cs052', 5487952165, 'coolaman@gmail.com', '1999-11-02', 'CSE', 7.6),
( 'Kavan Patel', '1js18is063', 9456852213, 'gujarati.choda@gmail.com', '1999-10-18', 'ISE', 6.9),
( 'Priyank Baliyan', '1js18cs069', 8542696969, 'dj.khalid@gmail.com', '2000-08-27', 'CSE', 7.1),
( 'Rahul Tilwani', '1js18is071', 9511154696, 'tillu69@gmail.com', '2000-10-12', 'ISE', 7.8),
( 'Ishani', '1js18cs025', 7456249450, 'ishani123@gmail.com', '1999-11-06', 'CSE', 9.6),
( 'Disha Panjwani', '1js18cs013', 9456845213, 'dishubabes@gmail.com', '1999-03-14', 'CSE', 9.5),
( 'Shikumi', '1js18is082', 8094125720, 'shikumi@gmail.com', '1999-09-28', 'ISE', 7.8),
( 'Pallavi Pandey', '1js18is062', 7531596482, 'ispalpal@gmail.com', '1999-11-13', 'ISE', 8.1);


INSERT INTO slogin ( usn, pass) VALUES
('1js18is005', 'shikumi'),
('1js18is071', 'tillu'),
('1js18is002', 'jaditi'),
('1js18cs003', 'anku'),
('1js18is052', 'aman'),
('1js18is063', 'gujrati'),
('1js18cs069', 'khalid'),
('1js18cs025', 'ishani'),
('1js18cs013', 'dishu'),
('1js18is082', 'shikumi'),
('1js18is062', 'pallavi');


INSERT INTO admindetails (aname, email, phone, depname) VALUES
('Rajat', 'rajjo@gmail.com', 1414175414, 'CSE'),
('Rahul', 'rahul111@gmail.com', 5546675414, 'ISE'),
('shiku', 'shiku@gmail.com', 7854475414, 'ISE'),
('Aditi', 'ajr@gmail.com', 8926525414, 'ECE');

INSERT INTO alogin ( aname, email, pass) VALUES
('Rajat', 'rajjo@gmail.com', 'rajjo'),
('Rahul', 'rahul111@gmail.com', 'rahul'),
('Shiku', 'shiku@gmail.com','shiku'),
('Aditi', 'ajr@gmail.com', 'aditi');

INSERT INTO companydetails (cname, cdescription, email, phone, website, adrs, package, mincgpa, position) VALUES
('Amazon', 'Amazon is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.', 'ecr-replies@amazon.com', 8882804331, 'www.amazon.com','Amazon Development Center India Pvt Ltd., 2nd Floor, Safina Towers, Bangalore – 560052', '15-30 lakhs', '7','WEB DEVELOPER'),
('Wipro', 'Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services.', 'ecr-replies@wipro.com', 8046726000, 'www.wipro.com','Doddakannelli, Sarjapur Road Bengaluru - 560 035, India', '10-20 lakhs', '7','WEB DEVELOPER'),
('Infosys', 'Infosys Limited, is an Indian multinational corporation that provides business consulting, information technology and outsourcing services.', 'Askus@infosys.com', 8028520362, 'www.infosys.com','Electronics City, Hosur Road, Bengaluru 560 100, India', '10-50 lakhs', '7','WEB DEVELOPER'),
('Accenture', 'Accenture plc is an American-Irish multinational professional services company.', 'xxxx@accenture.com', 8049346001, 'www.accenture.com','4/1, IBC Knowledge Park, Bannerghatta Road Bangalore, Karnataka India - 560029', '8-12 lakhs', '6.5','WEB DEVELOPER');

INSERT INTO updateddrive (usn, sname, batch, cname, pdate, package, position) VALUES
('1js18is005', 'Aarushi Rathore', '2018', 'Infosys', '2021-09-28', '11,00,000', 'WEB DEVELOPER'),
('1js18is071', 'Rahul Tilwani', '2018', 'Amazon', '2021-11-28', '19,00,000', 'WEB DEVELOPER'),
('1js18is003', 'Akanksha', '2018', 'Wipro', '2021-11-08', '15,00,000', 'WEB DEVELOPER'),
('1js18cs025', 'Ishani', '2018', 'Amazon', '2021-09-28', '16,00,000', 'WEB DEVELOPER'),
('1js18is063', 'Kavan Patel', '2018', 'Infosys', '2021-09-28', '12,00,000', 'WEB DEVELOPER'),
('1js18is082', 'Shikumi', '2018', 'Amazon', '2021-09-28', '14,00,000', 'WEB DEVELOPER');



SELECT sl.usn,sd.sname,sd.mobile,sd.email,sd.dob,sd.branch,sd.cgpa
FROM slogin AS sl
INNER JOIN studentdetails AS sd ON sl.usn = sd.usn;



DELETE FROM studentdetails
WHERE sname = 'RT';

DELETE FROM studentdetails
WHERE sname IN ('Lalu','fjlg');