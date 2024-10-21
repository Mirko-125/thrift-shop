from PIL import Image

def resize_to_portrait(input_path, output_path, portrait_width=5257, portrait_height=7885):
    """
    Resize the image to portrait dimensions while maintaining aspect ratio.

    :param input_path: Path to the input image.
    :param output_path: Path to save the resized image.
    :param portrait_width: Width of the portrait view (default is 1080 pixels).
    :param portrait_height: Height of the portrait view (default is 1920 pixels).
    """
    with Image.open(input_path) as img:
        # Calculate the new size maintaining the aspect ratio
        img_ratio = img.width / img.height
        portrait_ratio = portrait_width / portrait_height

        if img_ratio > portrait_ratio:
            # Image is wider than portrait, fit to height
            new_height = portrait_height
            new_width = int(portrait_height * img_ratio)
        else:
            # Image is taller than portrait, fit to width
            new_width = portrait_width
            new_height = int(portrait_width / img_ratio)

        resized_img = img.resize((new_width, new_height), Image.LANCZOS)
        
        # Crop the image to the exact portrait dimensions
        left = (new_width - portrait_width) / 2
        top = (new_height - portrait_height) / 2
        right = (new_width + portrait_width) / 2
        bottom = (new_height + portrait_height) / 2

        cropped_img = resized_img.crop((left, top, right, bottom))
        cropped_img.save(output_path)
        print(f"Image saved to {output_path}")

if __name__ == "__main__":
    input_path = input("Enter the path to the image: ")
    output_path = input("Enter the path to save the resized image (e.g., output.jpg): ")
    
    resize_to_portrait(input_path, output_path)