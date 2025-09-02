from PIL import Image, ImageDraw, ImageFont

# Load the astronaut image
img = Image.open('public/astronaut.jpg')
draw = ImageDraw.Draw(img)

# Try to use a bold font, fallback to default
try:
    font = ImageFont.truetype("DejaVuSans-Bold.ttf", 180)
except:
    font = ImageFont.load_default()

# Coordinates for the text (adjust as needed for suit area)
text = "FAKE"
# Place text in the lower center of the suit (approximate for Apollo 11 image)
x, y = 2200, 3400

# Draw text with a black outline for visibility
for dx in [-4, 0, 4]:
    for dy in [-4, 0, 4]:
        draw.text((x+dx, y+dy), text, font=font, fill="black")
draw.text((x, y), text, font=font, fill="red")

# Save the edited image
img.save('public/astronaut-fake.png')
print("Done: astronaut-fake.png created.")
