export default function({contribPercent, annualSalary, annualRaise, currentAge, retirementAge, currentBalance, annualRateOfReturn, employerMatch, employerMatchCap}) {

    let data = []

    let valArray = []

    let totalEarn = 0

    for (let i = 0; i < retirementAge - currentAge; i++) {

        let effectiveRaiseForYear = (1 + (annualRaise/100)) ** i

        let yearlySalary = (annualSalary * effectiveRaiseForYear)

        let employeeContribition = yearlySalary * (contribPercent/100)

        // console.log("effectiveRaiseForYear", effectiveRaiseForYear);
        // console.log("annualSalary", annualSalary);
        console.log("yearlySalary", yearlySalary);
        console.log("employeeContribition", employeeContribition);


        if (employeeContribition > 19500) {
            employeeContribition = 19500
        }

        let startingBalance = i === 0 ? currentBalance : valArray[i-1]

        console.log("startingBalance", startingBalance)

        let realEmployerMatchPercent = contribPercent > employerMatchCap ? employerMatchCap : contribPercent

        let employerContribution = yearlySalary * (realEmployerMatchPercent/100) * (employerMatch/100)

        console.log("employerContribution", employerContribution);

        let endOfYearTotalBeforeInterest = startingBalance + employeeContribition + employerContribution

        console.log("endOfYearTotalBeforeInterest", endOfYearTotalBeforeInterest);

        let endOfYearTotalAfterInterest = endOfYearTotalBeforeInterest * (1 + (annualRateOfReturn/100))

        totalEarn += endOfYearTotalAfterInterest

        console.log("endOfYearTotalAfterInterest", endOfYearTotalAfterInterest);

        valArray.push(endOfYearTotalAfterInterest)

    }

    data["totalEarn"] = totalEarn
    data["valArray"] = valArray

    return data

}