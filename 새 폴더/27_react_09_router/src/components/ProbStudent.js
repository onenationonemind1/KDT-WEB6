import { useParams, useNavigate } from "react-router-dom";

const ProbStudent = () => {
  const name = useParams();
  console.log(name); // 'sean' or 'codingon'

  const navigate = useNavigate();

  const [searchParams, setSerchParams] = URLSearchParams();

  const keyword = searchParams.get("name");

  return (
    <div>
      <h5>
        학생의 이름은 <span style={{ color: "blue" }}>{name}</span>입니다.
      </h5>
      {keyword && <h2>실제 이름은 {keyword} 입니다.</h2>}
      <button
        onClick={() => {
          navigate(-1);
        }}
      ></button>
    </div>
  );
};

export default ProbStudent;
