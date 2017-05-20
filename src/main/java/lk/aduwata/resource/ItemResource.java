package lk.aduwata.resource;


import lk.aduwata.model.Item;

import java.util.Date;

/**
 * ItemResource is for sending the item details to the frontend.
 *
 * @author Sugeesh Chandraweera
 */
public class ItemResource {
    private int item_id;
    private String name;
    private double price;
    private String color;
    private String size;
    private boolean used;
    private String description;
    private Date date;
    private int state;
    private byte[] image;


    public ItemResource() {
    }

    public ItemResource(int item_id, String name, double price, String color, String size, boolean used, String description, Date date, int state) {
        this.item_id = item_id;
        this.name = name;
        this.price = price;
        this.color = color;
        this.size = size;
        this.used = used;
        this.description = description;
        this.date = date;
        this.state = state;
    }

    public int getItem_id() {
        return item_id;
    }

    public void setItem_id(int item_id) {
        this.item_id = item_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public boolean isUsed() {
        return used;
    }

    public void setUsed(boolean used) {
        this.used = used;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public static ItemResource createResource(Item item) {
        ItemResource itemResource = new ItemResource();
        itemResource.setItem_id(item.getId());
        itemResource.setName(item.getName());
        itemResource.setPrice(item.getPrice());
        itemResource.setColor(item.getColor());
        itemResource.setSize(item.getSize());
        itemResource.setUsed(item.getUsed());
        itemResource.setDescription(item.getDescription());
        itemResource.setDate(item.getDate());
        itemResource.setState(item.getState());
        return itemResource;
    }

    public static Item createModel(ItemResource itemResource) {
        Item item = new Item();
        item.setId(itemResource.getItem_id());
        item.setName(itemResource.getName());
        item.setPrice(itemResource.getPrice());
        item.setColor(itemResource.getColor());
        item.setSize(itemResource.getSize());
        item.setUsed(itemResource.isUsed());
        item.setDescription(itemResource.getDescription());
        item.setDate(itemResource.getDate());
        item.setState(itemResource.getState());
        return item;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }
}

