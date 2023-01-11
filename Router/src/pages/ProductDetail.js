import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    /*
    <Route path="/productDetail/:id">
    이 경로에서 :id 형태로 작성된 params 값을 가져올 수 있다.
    */
    return (
        <section>
            <h1>Product Detail {params.id}</h1>
        </section>
    );
};

export default ProductDetail;