db.emp.insert({emp_id:1001,name:"rahul",lastname:"patel",email:"rahulh@google.com",phone:9874561237,Job_id:'E3',sal:80000,manager_id:'102'})
db.emp.insert({emp_id:1002,name:"ankit",lastname:"bajpai",email:"ankit@google.com",phone:9852617775,Job_id:'E4',sal:70000,manager_id:'103'})
db.emp.insert({emp_id:1003,name:"swati",lastname:"singla",email:"swati@google.com",phone:9745261738,Job_id:'E4',sal:60000,manager_id:'104',arr:['a','b','c','d']})
db.emp.insert({emp_id:1004,name:"yash",lastname:"sharma",email:"yash@google.com",phone:98745614455,Job_id:'E3',sal:77000,manager_id:'102'})
db.emp.insert({emp_id:1005,name:"alaykhyaa",lastname:"bajpai",email:"alaykhyaa@google.com",phone:98526173999,Job_id:'E4',sal:89000,manager_id:'103'})


db.emp.getIndexes()

db.emp.createIndexes({"job_id":1})

db.emp.dropIndexes({"job_id":1})



db.article.insert([
     {"text":"ind11ia with cricket","tags":["ind12ia","cricket"]},
      {"text":"economy of india","tags":["economy","india"]},
 {"text":"nature and beatuy of himalays","tags":["himalays","nature"]}, {"text":"beauty of india","tags":["beauty","ind"]}
  ])

  db.article.createIndex({text:"text"})

  db.article.find({$text:{$search:'india'}})
  db.article.find({tag:{$regex:'ind'}}).pretty()

  db.article.find({tag:{$regex:'h'}}).pretty()
