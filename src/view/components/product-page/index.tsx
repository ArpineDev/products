import {FC, useEffect, useState} from 'react';
import {MockProductPageGateway} from "../../../gateways/product-page";
import {useParams} from "react-router-dom";
import {Product} from "../../../models";
import {Modal} from "../common/modal";

export const ProductPage: FC = () => {
  const {productId} =useParams<{ productId: string }>()
  const [productData, setProductData]=useState<Product>()
  const [linkedProducts, setLinkedProducts]=useState<Product[]>([])
  const [addedProducts, setAddedProducts]=useState<{name:string, price: number}[]>([])
  const [activeProduct, setActiveProduct]=useState<{name:string, price: number}| null>(null)
  const [categories, setCategories]=useState<string[]>()
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    (async()=>{
      const api=new MockProductPageGateway()
      try {
        const data=await api.getProduct(productId as string)
        setProductData(data)
        const linkedProducts=await api.getLinkedProducts(productId as string)
        setLinkedProducts(linkedProducts)
        const categories=await api.getCategories()
        const categoryIds=categories.reduce((acc, item)=>{
          item.children?.forEach(child=>{
            acc.push(child?.id)
          })
          return acc
        },[] as string[])
        setCategories(categoryIds)
      }catch (e) {
        console.error(e)
      }
    } )()
  }, [])

  const handleAdd=(name:string, price:number)=>{
    setAddedProducts(prev=>[...prev, {name, price }])
  }

  const handleShowProduct=(name:string, price:number)=>{
    setActiveProduct({name, price})
    setIsOpen(true)
  }

  return <>
    <Modal onClose={()=>setActiveProduct(null)} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
      <>
        <div>{activeProduct?.name}</div>
        <div>Price: {activeProduct?.price}</div>
      </>
    </Modal>
    <div style={{ display: 'flex'}}>
    <div style={{border: '1px solid red', width: '50%'}}>
    <div> Tовар: productId</div>
    <div>Price:  {productData?.price} </div>
    </div>
      <div style={{display:'flex', flexWrap: "wrap"}}>
        {addedProducts.map(({name, price})=>{
          return (<div style={{border:'1px solid black', marginRight:'10px', padding:'4px'}} key={name+price}>
            <div>{name}</div>
            <div>Price: {price}</div>
          </div>)
        })}
      </div>
    </div>
    <ul>
      {linkedProducts.map(({category, name, price, id})=>{
        if(category?.id===productData?.category?.id){
          return <li onClick={()=>handleAdd(name, price)} key={id}>Аналог: <button>{name}</button></li>
        }

        if(categories?.includes(category?.id+'')){
           return   <li onClick={()=>handleShowProduct(name, price)}  key={id}>Сопутствующий: <button>{name}</button></li>
        }

        return <li onClick={()=>handleShowProduct(name, price)} key={id}><button>{name}</button></li>
      })}

    </ul>
  </>;
};
