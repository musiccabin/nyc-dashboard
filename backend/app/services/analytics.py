from app.db import get_db

def get_top_rated_restaurants():
    conn = get_db()
    cur = conn.cursor()

    cur.execute("""
        SELECT restaurant_name, AVG(rating) as avg_rating
        FROM orders
        WHERE rating IS NOT NULL
        GROUP BY restaurant_name
        HAVING COUNT(*) >= 5
        ORDER BY avg_rating DESC
        LIMIT 10
    """)

    rows = cur.fetchall()
    conn.close()

    return [
        {"restaurant": r[0], "avg_rating": round(r[1], 2)}
        for r in rows
    ]


def get_fastest_restaurants():
    conn = get_db()
    cur = conn.cursor()

    cur.execute("""
        SELECT restaurant_name, SUM(food_preparation_time + delivery_time) as fulfilment_time
        FROM orders
        GROUP BY restaurant_name
        HAVING COUNT(*) >= 5
        ORDER BY fulfilment_time
        LIMIT 10
    """)

    rows = cur.fetchall()
    conn.close()

    return [
        {"restaurant": r[0], "fulfilment_time": r[1]}
        for r in rows
    ]