import React from "react";

const ages = [18,28,22,1,100,90,14];

const predicate = (age: number) => {
    return age > 90
}

const oldAges =[100];

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 110},
    {title: "React", price: 110},
]