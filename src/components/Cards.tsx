import { FunctionComponent, useContext, useEffect, useState } from "react";
import { SiteTheme } from "../App";
import { Link } from "react-router-dom";
import Card from "../interfaces/Card";
import { getCards } from "../services/cardsServices";
import NewCardModal from "./NewCardModal";
import DeleteCardModal from "./DeleteCardModal";
import UpdateCardModal from "./UpdateCardModal";



interface CardsProps {
    setUserInfo: Function;
    userInfo: any;
};


const Cards: FunctionComponent<CardsProps> = ({ setUserInfo, userInfo }) => {
    let theme = useContext(SiteTheme);
    let [cards, setCards] = useState<Card[]>([]);
    let [openNewCardModal, setOpenNewCardModal] = useState<boolean>(false);
    let [openDeleteCardModal, setOpenDeleteCardModal] = useState<boolean>(false);
    let [openUpdateCardModal, setOpenUpdateCardModal] = useState<boolean>(false);
    let [cardId, setCardId] = useState<number>(0);
    let [cardTitle, setCardTitle] = useState<string>("");
    let [dataUpdated, setDataUpdated] = useState<boolean>(false);
    let [favorites, setFavorites] = useState<number[]>([])
    let render = () => setDataUpdated(!dataUpdated);
    useEffect(() => {
        getCards().then((res) => setCards(res.data)).catch((err) => console.log(err));
    }, [dataUpdated, userInfo.userId]);

    return (
        <div className={`container mt-3 eCard ${theme}`}>
            <h1 className="display-1  fw-bold text-start">
                Cards
            </h1>
            <div className="text-end mb-2">
                {(userInfo.business || userInfo.isAdmin) && (
                    <Link
                        to=""
                        className="btn btn-primary rounded-circle position-fixed top-50 end-0 mb-5 mx-5"
                        onClick={() => setOpenNewCardModal(true)}
                    >
                        <i className="fa-solid fa-plus fs-2 fw-normal"></i>
                    </Link>
                )}
            </div>
            {cards.length ? (
                <div className="container">
                    <div className="row">
                        {cards.map((card: Card) => (
                            <div
                                key={card.id}
                                className="card col-md-4 mx-2 mt-6 "
                                style={{ width: "18rem" }}  >
                                <div className="cardImgDiv mt-2 ">
                                    <img
                                        src={card.image_url}
                                        className="card-img-top cardImg "
                                        alt={card.image_alt}
                                        style={{ width: "16.5rem", height: "16.5rem" }}
                                        onClick={() => {
                                            setCardId(card.id as number);
                                            setCardTitle(card.title);

                                        }}
                                    />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        {card.title}
                                    </h6>
                                    <h5 className="card-title text-start">{card.subtitle}</h5>
                                    <p className="card-text mb-4 text-start">{card.description}</p>
                                    <div className="cardIcons">
                                        <div className="row">
                                            {(userInfo.email === card.creatorId ||
                                                userInfo.isAdmin) && (

                                                    <div className="col left-icons text-start">
                                                        <Link
                                                            to=""
                                                            className="btn col"
                                                            onClick={() => {
                                                                setCardId(card.id as number);
                                                                setCardTitle(card.title);
                                                                setOpenDeleteCardModal(true);
                                                            }}
                                                        >
                                                            <i className="fa-solid fa-trash text-primary"></i>
                                                        </Link>
                                                        <Link
                                                            to=""
                                                            className="btn col"
                                                            onClick={() => {
                                                                setCardId(card.id as number);
                                                                setCardTitle(card.title);
                                                                setOpenUpdateCardModal(true);
                                                            }}
                                                        >
                                                            <i className="fa-solid fa-pen-to-square text-primary"></i>
                                                        </Link>
                                                    </div>
                                                )}
                                            <div className="col right-icons text-end">
                                                <Link
                                                    to={`tel:${card.phone}`}
                                                    className="btn col"
                                                >
                                                    <i className="fa-solid fa-phone text-primary"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>No cards</p>
            )}
            {<NewCardModal
                show={openNewCardModal}
                onHide={() => setOpenNewCardModal(false)}
                render={render}
                userInfo={userInfo}
            />}
            {<DeleteCardModal
                show={openDeleteCardModal}
                onHide={() => setOpenDeleteCardModal(false)}
                render={render}
                cardId={cardId}
                cardTitle={cardTitle}
            />}
            {<UpdateCardModal
                show={openUpdateCardModal}
                onHide={() => setOpenUpdateCardModal(false)}
                render={render}
                cardId={cardId}
                cardTitle={cardTitle}
                userInfo={userInfo}
            />}

        </div>
    );
};

export default Cards;