function students(input) {
    const arrCopy = input.slice();
    const courses = {};

    for (const line of arrCopy) {
        const checkData = line.split(': ');
        if (checkData.length > 1) {
            const [courseName, capacity] = checkData;
            if (!courses[courseName]) {
                courses[courseName] = {
                    capacity: Number(capacity),
                    students: [],
                };
            } else {
                courses[courseName].capacity += Number(capacity);
            }
        } else {
            const [
                usernameAndCredit,
                ignore,
                ignore2,
                email,
                ignore3,
                courseName,
            ] = line.split(' ');
            const infoToArr = Array.from(usernameAndCredit);
            const student = [];
            const credit = [];

            while (infoToArr[0] !== '[') {
                student.push(infoToArr.shift());
            }
            for (let index = 1; index < infoToArr.length - 1; index++) {
                credit.push(infoToArr[index]);
            }

            if (courses[courseName] && courses[courseName].capacity > 0) {
                courses[courseName].students.push({
                    student: student.join(''),
                    credit: Number(credit.join('')),
                    email,
                });
                courses[courseName].capacity--;
            }
        }
    }

    Object.keys(courses)
        .sort((a, b) => courses[b].students.length - courses[a].students.length)
        .map((key) => {
            courses[key].students = courses[key].students.sort(
                (a, b) => b.credit - a.credit
            );
            return key;
        })
        .forEach((key) => {
            console.log(
                `${key}: ${courses[key].capacity} places left ${courses[
                    key
                ].students
                    .map(
                        (student) =>
                            `\n--- ${student.credit}: ${student.student}, ${student.email}`
                    )
                    .join('')}`
            );
        });
}
