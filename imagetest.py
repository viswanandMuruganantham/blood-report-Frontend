import easyocr

# Create an OCR reader object
reader = easyocr.Reader(['en'])

# Read text from an image
result = reader.readtext('sample.png')

# Print the extracted text
for detection in result:
    print(detection[1])

# https://www.analyticsvidhya.com/blog/2024/04/ocr-libraries-in-python/