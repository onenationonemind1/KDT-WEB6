import { useParams, useNavigate } from "react-router-dom";

// var array = [];
var targetProduct = [];
const ProductDetailPage = (props) => {
  const { products } = props;
  console.log("1", products[0].id);

  const { productId } = useParams();
  console.log("2", productId); // '1'

  // 퀴즈
  // targetProduct 변수에 productId에 해당하는 상품 객체를 저장
  // 힌트 filter()

  targetProduct = products.filter(
    (element) => element.id === Number(productId)
  );
  // if (products[0].id === Number(productId)) {
  //   targetProduct.push(products[0]);
  // }
  console.log("3", targetProduct);

  const navigate = useNavigate();

  return (
    <main className="ProductDetailPage">
      <h1>여기는 상품 디테일 페이지!</h1>
      <button onClick={() => navigate(-1)}>목록보기</button>
      <button onClick={() => navigate("/")}>홈으로 이동하기</button>
      <ul>
        <li>판매 번호:{targetProduct.id}</li>
        <li>상품명:{targetProduct.name}</li>
        <li>판매자:{targetProduct.email}</li>
        <li>상세 설명:{targetProduct.body}</li>
      </ul>
    </main>
  );
};

export default ProductDetailPage;
