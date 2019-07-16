db.students.insertMany(
	[
	{name: "Mark", age: 23, enrolledClass: "Math"},
	{name: "Pete", age: 22, enrolledClass: "CS"},
	{name: "Max", age: 33, enrolledClass: "DB"},
	{name: "Park", age: 23, enrolledClass: "Math"},
	{name: "Jon", age: 23, enrolledClass: "Math"},
	]
)

db.students.find(
	{
		enrolledClass: "Math"
	}
)

db.students.find(
	{
		age: {$gte : 23}
	}
)

db.students.update(
{enrolledClass: "Math"}, {$set :{ enrolledClass:"Computer Science"}}
)

db.students.update(
{enrolledClass: "Math"}, {$set :{ enrolledClass:"Computer Science"}}, {multi :true}
)

db.students.insert(
	{name: "M", age: 23, enrolledClass: "Math"},
)

db.students.remove(
	{"name": "Jon"}
)

db.students.aggregate({"$group":{"_id":null, averageAge: {$avg:"$age"}}})

db.students.aggregate({"$group":{"_id":null, students:{$push:"$name"}}})

db.students.update({"name":"M"},{$set:{"city":"CA"}})


db.createUser({
	user: "Test(Read)",
	pwd: "Test",
	roles: ["read"]
})

show users





