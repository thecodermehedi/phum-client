import { useGetAllSemestersQuery } from "../../redux/featues/academicSemester/academicSemesterApi";

const AcademicSemesters = () => {
 const { data, error } = useGetAllSemestersQuery(undefined)
 console.log(data);
 console.log(error);


 return (
  <div>
   <h1>Academic Semesters</h1>
  </div>
 )
}

export default AcademicSemesters

