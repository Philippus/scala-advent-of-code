"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4052],{4163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905)),r=n(6340);const o={},l="Day 1: Trebuchet?!",s={unversionedId:"2023/puzzles/day01",id:"2023/puzzles/day01",title:"Day 1: Trebuchet?!",description:"by @sjrd",source:"@site/target/mdoc/2023/puzzles/day01.md",sourceDirName:"2023/puzzles",slug:"/2023/puzzles/day01",permalink:"/scala-advent-of-code/2023/puzzles/day01",draft:!1,editUrl:"https://github.com/scalacenter/scala-advent-of-code/edit/website/docs/2023/puzzles/day01.md",tags:[],version:"current",frontMatter:{},sidebar:"adventOfCodeSidebar",previous:{title:"Setup",permalink:"/scala-advent-of-code/setup"},next:{title:"Day 1: Calorie Counting",permalink:"/scala-advent-of-code/2022/puzzles/day01"}},d={},p=[{value:"Puzzle description",id:"puzzle-description",level:2},{value:"Solution Summary",id:"solution-summary",level:2},{value:"Part 1",id:"part-1",level:3},{value:"Part 2",id:"part-2",level:3},{value:"Final Code",id:"final-code",level:2},{value:"Run it in the browser",id:"run-it-in-the-browser",level:3},{value:"Part 1",id:"part-1-1",level:4},{value:"Part 2",id:"part-2-1",level:4},{value:"Solutions from the community",id:"solutions-from-the-community",level:2}],u={toc:p};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"day-1-trebuchet"},"Day 1: Trebuchet?!"),(0,a.kt)("p",null,"by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sjrd"},"@sjrd")),(0,a.kt)("h2",{id:"puzzle-description"},"Puzzle description"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://adventofcode.com/2023/day/1"},"https://adventofcode.com/2023/day/1")),(0,a.kt)("h2",{id:"solution-summary"},"Solution Summary"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Iterate over each line of the input."),(0,a.kt)("li",{parentName:"ol"},"Convert each line into coordinates, using the appropriate mechanism for ",(0,a.kt)("inlineCode",{parentName:"li"},"part1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"part2"),"."),(0,a.kt)("li",{parentName:"ol"},"Sum the coordinates.")),(0,a.kt)("h3",{id:"part-1"},"Part 1"),(0,a.kt)("p",null,"Our main driver iterates over the lines, converts each line into coordinates, then sums them.\nIt therefore looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"def part1(input: String): String =\n  // Convert one line into the appropriate coordinates\n  def lineToCoordinates(line: String): Int =\n    ???\n\n  // Convert each line to its coordinates and sum all the coordinates\n  val result = input\n    .linesIterator\n    .map(lineToCoordinates(_))\n    .sum\n  result.toString()\nend part1\n")),(0,a.kt)("p",null,"In order to convert a line into coordinates, we find the first and last digits in the line.\nWe then put them next to each other in a string to interpret them as coordinates, as asked."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'// Convert one line into the appropriate coordinates\ndef lineToCoordinates(line: String): Int =\n  val firstDigit = line.find(_.isDigit).get\n  val lastDigit = line.findLast(_.isDigit).get\n  s"$firstDigit$lastDigit".toInt\n')),(0,a.kt)("h3",{id:"part-2"},"Part 2"),(0,a.kt)("p",null,"The main driver is the same as for part 1.\nWhat changes is how we convert each line into coordinates."),(0,a.kt)("p",null,"We first build a hard-coded map of string representations to numeric values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'/** The textual representation of digits. */\nval stringDigitReprs: Map[String, Int] = Map(\n  "one" -> 1,\n  "two" -> 2,\n  "three" -> 3,\n  "four" -> 4,\n  "five" -> 5,\n  "six" -> 6,\n  "seven" -> 7,\n  "eight" -> 8,\n  "nine" -> 9,\n)\n\n/** All the string representation of digits, including the digits themselves. */\nval digitReprs: Map[String, Int] =\n  stringDigitReprs ++ (1 to 9).map(i => i.toString() -> i)\n')),(0,a.kt)("p",null,"We will now have to find the first and last string representation in the line.\nAlthough not the most efficient solution, we do this by building a regular expression that matches any key of the above map."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'// A regex that matches any of the keys of `digitReprs`\nval digitReprRegex = digitReprs.keysIterator.mkString("|").r\n')),(0,a.kt)("p",null,"Now, we find all matches of the regex in the line, convert them to their numeric values, and concatenate them as before:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'def lineToCoordinates(line: String): Int =\n  // Find all the digit representations in the line.\n  val matches = digitReprRegex.findAllIn(line).toList\n\n  // Convert the string representations into actual digits and form the result\n  val firstDigit = digitReprs(matches.head)\n  val lastDigit = digitReprs(matches.last)\n  s"$firstDigit$lastDigit".toInt\nend lineToCoordinates\n')),(0,a.kt)("p",null,"However, this does not seem to be correct.\nWhen we submit our answer with the above, the checker tells us that our answer is too low.\nWhat went wrong?"),(0,a.kt)("p",null,"It turns out that the dataset contains lines where two textual representations overlap.\nFor example, our data contained:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"29oneightt\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Regex.findAllIn")," only finds ",(0,a.kt)("em",{parentName:"p"},"non-overlapping")," matches in a string.\nIt therefore returns ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"9"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"one"),", but misses the ",(0,a.kt)("inlineCode",{parentName:"p"},"eight")," that overlaps with ",(0,a.kt)("inlineCode",{parentName:"p"},"one"),"."),(0,a.kt)("p",null,"There is no built-in function to handle overlapping matches, nor to find the ",(0,a.kt)("em",{parentName:"p"},"last")," match of a regex in a string.\nInstead, we manually iterate over all the indices to see if a match starts there.\nThis is equivalent to looking for ",(0,a.kt)("em",{parentName:"p"},"prefix")," matches in all the ",(0,a.kt)("em",{parentName:"p"},"suffixes")," of line.\nConveniently, ",(0,a.kt)("inlineCode",{parentName:"p"},"line.tails")," iterates over all such suffixes, and ",(0,a.kt)("inlineCode",{parentName:"p"},"Regex.findPrefixOf")," will look only for prefixes."),(0,a.kt)("p",null,"Our fixed computation for ",(0,a.kt)("inlineCode",{parentName:"p"},"matches")," is now:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val matchesIter =\n  for\n    lineTail <- line.tails\n    oneMatch <- digitReprRegex.findPrefixOf(lineTail)\n  yield\n    oneMatch\nval matches = matchesIter.toList\n")),(0,a.kt)("h2",{id:"final-code"},"Final Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'def part1(input: String): String =\n  // Convert one line into the appropriate coordinates\n  def lineToCoordinates(line: String): Int =\n    val firstDigit = line.find(_.isDigit).get\n    val lastDigit = line.findLast(_.isDigit).get\n    s"$firstDigit$lastDigit".toInt\n\n  // Convert each line to its coordinates and sum all the coordinates\n  val result = input\n    .linesIterator\n    .map(lineToCoordinates(_))\n    .sum\n  result.toString()\nend part1\n\n/** The textual representation of digits. */\nval stringDigitReprs = Map(\n  "one" -> 1,\n  "two" -> 2,\n  "three" -> 3,\n  "four" -> 4,\n  "five" -> 5,\n  "six" -> 6,\n  "seven" -> 7,\n  "eight" -> 8,\n  "nine" -> 9,\n)\n\n/** All the string representation of digits, including the digits themselves. */\nval digitReprs = stringDigitReprs ++ (1 to 9).map(i => i.toString() -> i)\n\ndef part2(input: String): String =\n  // A regex that matches any of the keys of `digitReprs`\n  val digitReprRegex = digitReprs.keysIterator.mkString("|").r\n\n  def lineToCoordinates(line: String): Int =\n    // Find all the digit representations in the line\n    val matchesIter =\n      for\n        lineTail <- line.tails\n        oneMatch <- digitReprRegex.findPrefixOf(lineTail)\n      yield\n        oneMatch\n    val matches = matchesIter.toList\n\n    // Convert the string representations into actual digits and form the result\n    val firstDigit = digitReprs(matches.head)\n    val lastDigit = digitReprs(matches.last)\n    s"$firstDigit$lastDigit".toInt\n  end lineToCoordinates\n\n  // Process lines as in part1\n  val result = input\n    .linesIterator\n    .map(lineToCoordinates(_))\n    .sum\n  result.toString()\nend part2\n')),(0,a.kt)("h3",{id:"run-it-in-the-browser"},"Run it in the browser"),(0,a.kt)("h4",{id:"part-1-1"},"Part 1"),(0,a.kt)(r.Z,{puzzle:"day01-part1",year:"2023",mdxType:"Solver"}),(0,a.kt)("h4",{id:"part-2-1"},"Part 2"),(0,a.kt)(r.Z,{puzzle:"day01-part2",year:"2023",mdxType:"Solver"}),(0,a.kt)("h2",{id:"solutions-from-the-community"},"Solutions from the community"),(0,a.kt)("p",null,"Share your solution to the Scala community by editing this page."))}h.isMDXComponent=!0}}]);