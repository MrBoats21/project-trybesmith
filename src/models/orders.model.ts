import connection from './connection';

const ordersModel = async () => {
  const [orders] = await connection
    .execute(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON o.id = p.orderId
    GROUP BY o.id`,
    );
  return orders;
};

export default ordersModel;