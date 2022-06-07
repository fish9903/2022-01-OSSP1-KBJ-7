import axios from 'axios';
import { useState, useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function OnCartPage() {
    const [useritem, setuseritem] = useState([]);
    const [Cart, setCart] = useState([]);
    const [CartList, setCartList] = useState([]);
    const params = useParams();
    const user_id = (params.user_id);
    const food_id = (params.food_id);

   /* const useConfirm = (message = null, onConfirm, onCancel) => {
        if (!onConfirm || typeof onConfirm !== "function") {
            return;
        }
        if (onCancel && typeof onCancel !== "function") {
            return;
        }

        const confirmAction = () => {
            if (window.confirm(message)) {
                onConfirm();
            } else {
                onCancel();
            }
        };

        return confirmAction;
    };

    const deleteConfirm = () => console.log("삭제했습니다.");
    const cancelConfirm = () => console.log("취소했습니다.");
    const confirmDelete = useConfirm(
        "삭제하시겠습니까?",
        deleteConfirm,
        cancelConfirm
    );
    */
    useEffect(() => {
        axios.get(`/api/userCart/${user_id}`)
            .then(res => {
                setCart(res.data);
                if (Cart.length !== 0) // Cart배열이 구성되어야 작동해야함
                    setCartList(Object.values(Cart[0]));
            })
            //.then(console.log(Cart))
            //.then(console.log(CartList)) // ex) ['kaka5', 1, 0, 0, 0, 0, ...]
            .then(console.log(CartList[food_id])) 

        /*axios.get('/api/useritem')
            .then(res => setuseritem(res.data))
            .then(console.log(useritem)) // 받아온 음식리스트 출력해보기*/


    })

    

    return (
        <div>
        </div>
    );
}
