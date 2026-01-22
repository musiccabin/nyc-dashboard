from app.db import get_db

def get_top_rated_restaurants():
    conn = get_db()
    cur = conn.cursor()

    query = """
        SELECT
            restaurant_name,
            avg_rating,
            avg_prep_time,
            avg_cost,
            cuisine_type,
            higher_day_type
        FROM restaurant_summary
        GROUP BY restaurant_name 
        ORDER BY avg_rating DESC
        """

    cur.execute(query)
    rows = cur.fetchall()
    conn.close()

    return [
        {
            "name": r[0], 
            "avg_rating": round(r[1], 2), 
            "avg_prep_time": round(r[2]), 
            "avg_cost": round(r[3]), 
            "cuisine": r[4],
            "higher_day": r[5]
            } for r in rows
    ]
