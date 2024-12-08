import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

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

