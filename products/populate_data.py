from .models import Product

def populate_data():
    data = [
        {
        "Title": "Wireless Headphones",
        "Price": 150,
        "Description": "High-quality wireless headphones with noise cancellation.",
        "Category": "Electronics",
        "Image": "https://example.com/images/wireless-headphones.jpg",
        "Sold": True,
        "Is Sale": True,
        "DateOfSale": "2024-11-20"
        },
        {
        "Title": "Gaming Laptop",
        "Price": 1200,
        "Description": "High-performance laptop for gaming and productivity.",
        "Category": "Electronics",
        "Image": "https://example.com/images/gaming-laptop.jpg",
        "Sold": False,
        "Is Sale": False,
        "DateOfSale": None
        },
        {
        "Title": "Yoga Mat",
        "Price": 25,
        "Description": "Eco-friendly yoga mat with non-slip surface.",
        "Category": "Fitness",
        "Image": "https://example.com/images/yoga-mat.jpg",
        "Sold": True,
        "Is Sale": False,
        "DateOfSale": "2024-11-15"
        },
        {
        "Title": "Smart Watch",
        "Price": 200,
        "Description": "Feature-packed smartwatch with heart rate monitor.",
        "Category": "Electronics",
        "Image": "https://example.com/images/smart-watch.jpg",
        "Sold": True,
        "Is Sale": True,
        "DateOfSale": "2024-11-18"
        },
        {
        "Title": "Running Shoes",
        "Price": 80,
        "Description": "Comfortable running shoes for all terrains.",
        "Category": "Fitness",
        "Image": "https://example.com/images/running-shoes.jpg",
        "Sold": False,
        "Is Sale": True,
        "DateOfSale": None
        },
        {
        "Title": "Bluetooth Speaker",
        "Price": 45,
        "Description": "Portable Bluetooth speaker with deep bass.",
        "Category": "Electronics",
        "Image": "https://example.com/images/bluetooth-speaker.jpg",
        "Sold": True,
        "Is Sale": True,
        "DateOfSale": "2024-11-10"
        },
        {
        "Title": "Office Chair",
        "Price": 120,
        "Description": "Ergonomic office chair with adjustable height.",
        "Category": "Furniture",
        "Image": "https://example.com/images/office-chair.jpg",
        "Sold": False,
        "Is Sale": False,
        "DateOfSale": None
        },
        {
        "Title": "Standing Desk",
        "Price": 300,
        "Description": "Adjustable standing desk for a healthy workspace.",
        "Category": "Furniture",
        "Image": "https://example.com/images/standing-desk.jpg",
        "Sold": True,
        "Is Sale": False,
        "DateOfSale": "2024-11-22"
        },
        {
        "Title": "Cookware Set",
        "Price": 75,
        "Description": "Non-stick cookware set for everyday cooking.",
        "Category": "Kitchen",
        "Image": "https://example.com/images/cookware-set.jpg",
        "Sold": False,
        "Is Sale": True,
        "DateOfSale": None
        },
        {
        "Title": "Electric Kettle",
        "Price": 40,
        "Description": "Quick-boil electric kettle with auto shut-off.",
        "Category": "Kitchen",
        "Image": "https://example.com/images/electric-kettle.jpg",
        "Sold": True,
        "Is Sale": True,
        "DateOfSale": "2024-11-05"
        },
        {
        "Title": "Mountain Bike",
        "Price": 500,
        "Description": "Durable mountain bike for off-road adventures.",
        "Category": "Fitness",
        "Image": "https://example.com/images/mountain-bike.jpg",
        "Sold": False,
        "Is Sale": False,
        "DateOfSale": None
        },
        {
        "Title": "Winter Jacket",
        "Price": 90,
        "Description": "Waterproof winter jacket with hood.",
        "Category": "Clothing",
        "Image": "https://example.com/images/winter-jacket.jpg",
        "Sold": True,
        "Is Sale": True,
        "DateOfSale": "2024-11-15"
        },
        {
        "Title": "Gaming Mouse",
        "Price": 35,
        "Description": "Ergonomic gaming mouse with RGB lighting.",
        "Category": "Electronics",
        "Image": "https://example.com/images/gaming-mouse.jpg",
        "Sold": True,
        "Is Sale": True,
        "DateOfSale": "2024-11-12"
        },
        {
        "Title": "Leather Wallet",
        "Price": 25,
        "Description": "Premium leather wallet with RFID protection.",
        "Category": "Accessories",
        "Image": "https://example.com/images/leather-wallet.jpg",
        "Sold": False,
        "Is Sale": False,
        "DateOfSale": None
        },
        {
        "Title": "Sunglasses",
        "Price": 50,
        "Description": "Stylish sunglasses with UV protection.",
        "Category": "Accessories",
        "Image": "https://example.com/images/sunglasses.jpg",
        "Sold": True,
        "Is Sale": False,
        "DateOfSale": "2024-11-20"
        },
        {
        "Title": "Microwave Oven",
        "Price": 250,
        "Description": "High-power microwave oven with digital display.",
        "Category": "Kitchen",
        "Image": "https://example.com/images/microwave-oven.jpg",
        "Sold": False,
        "Is Sale": True,
        "DateOfSale": None
        },
        {
        "Title": "Travel Backpack",
        "Price": 60,
        "Description": "Lightweight travel backpack with multiple compartments.",
        "Category": "Accessories",
        "Image": "https://example.com/images/travel-backpack.jpg",
        "Sold": True,
        "Is Sale": True,
        "DateOfSale": "2024-11-08"
        },
        {
        "Title": "Desk Lamp",
        "Price": 30,
        "Description": "LED desk lamp with adjustable brightness.",
        "Category": "Furniture",
        "Image": "https://example.com/images/desk-lamp.jpg",
        "Sold": True,
        "Is Sale": True,
        "DateOfSale": "2024-11-11"
        },
        {
        "Title": "Electric Scooter",
        "Price": 700,
        "Description": "Eco-friendly electric scooter with long battery life.",
        "Category": "Electronics",
        "Image": "https://example.com/images/electric-scooter.jpg",
        "Sold": False,
        "Is Sale": False,
        "DateOfSale": None
        },
        {
        "Title": "Fitness Tracker",
        "Price": 60,
        "Description": "Wearable fitness tracker with sleep monitoring.",
        "Category": "Fitness",
        "Image": "https://example.com/images/fitness-tracker.jpg",
        "Sold": True,
        "Is Sale": True,
        "DateOfSale": "2024-11-19"
        },
    ]
    
    # Loop through the data and create Product instances
    # using get() method to avoid error as DateOfSale field is not in product model
    for product in data:
        Product.objects.create(
            title=product.get("Title", "Untitled"),
            price=product.get("Price", 0.0),
            description=product.get("Description", ""),
            category=product.get("Category", ""),
            image=product.get("Image", ""),
            sold=product.get("Sold", False),
            is_sale=product.get("Is Sale", False),  
        )
    
        
    print("Data populated successfully.")

if __name__=="__main__":
    populate_data()
