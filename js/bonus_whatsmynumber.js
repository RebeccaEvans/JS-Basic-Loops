/* 
BONUS: What's My Number?
Have you learned about JavaScript objects yet? If you've got some bonus time, there's no time like the present!

Use a for...in loop to examine the phoneBook Object below and print out the names of all the people who share the phone number "333-333-3333". */

var phoneBook = {
	"Abe": "111-111-1111",
	"Bob": "222-222-2222",
	"Cam": "333-333-3333",
	"Dan": "444-444-4444",
	"Ern": "555-555-5555",
	"Fry": "111-111-1111",
	"Gil": "222-222-2222",
	"Hal": "333-333-3333",
	"Ike": "444-444-4444",
	"Jim": "555-555-5555",
	"Kip": "111-111-1111",
	"Liv": "222-222-2222",
	"Mia": "333-333-3333",
	"Nik": "444-444-4444",
	"Oli": "555-555-5555",
	"Pam": "111-111-1111",
	"Qiq": "222-222-2222",
	"Rob": "333-333-3333",
	"Stu": "444-444-4444",
	"Tad": "555-555-5555",
	"Uwe": "111-111-1111",
	"Val": "222-222-2222",
	"Wil": "333-333-3333",
	"Xiu": "444-444-4444",
	"Yam": "555-555-5555",
	"Zed": "111-111-1111"
  }
  
  for (phoneBook.keys in phoneBook) {
	if (phoneBook[phoneBook.keys] === "333-333-3333") {
	console.log(phoneBook.keys)
	}
  }